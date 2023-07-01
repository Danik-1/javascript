import { AbstractComponent } from "@/core/component/abstract-component.component";
import renderService from "@/core/services/render.service";

import template from "./user-item.template.html";
import styles from "./user-item.module.scss";
import { $J } from "@/core/jquery/jquery.lib";

export class UserItem extends AbstractComponent {
  constructor(user, isGray = false, onClick) {
    super()

    if (!user) throw new Error('User must be passed')
    if (!user?.name) throw new Error('User must have a name')
    if (!user?.avatarPath) throw new Error('User must have an "avatarPath"')

    this.user = user
    this.isGray = isGray
    this.onClick = onClick
  }

  #preventDefault(event) {
    event.preventDefault()
  }

  /**
   * 
   * @param {string} avatarPath 
   * @param {string} userName 
   */
  update({avatarPath, name}) {
    $J(this.element).find('img').attr('src', avatarPath).attr('alt', name)
    $J(this.element).find('span').textContent(name)
  }

  render() {
    this.element = renderService.htmlToElement(template, [], styles)

    this.update(this.user)
    $J(this.element).onClick(this.onClick || this.#preventDefault.bind(this))

    if (!this.onClick)
      $J(this.element).attr('disabled', '')
    
    if (this.isGray)
      $J(this.element).addClass(styles.gray)


    return this.element
  }
}