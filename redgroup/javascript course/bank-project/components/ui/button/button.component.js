import renderService from "@/core/services/render.service";
import template from "./button.template.html";
import styles from "./button.module.scss";
import { AbstractComponent } from "@/core/component/abstract-component.component";
import { $J } from "@/core/jquery/jquery.lib";

export class Button extends AbstractComponent {
    /**
     * @param {string} children 
     * @param {function(Event): void} onClick 
     * @param {string} color 
     */
  constructor({ children, onClick, color }){
    super()

    if (!children)
        throw new Error('Children is empty')

    this.children = children
    this.onClick = onClick
    this.color = color
  }

  render() {
    this.element = renderService.htmlToElement(template, [], styles)
    const button = $J(this.element)
    button.innerHTML(this.children).onClick(this.onClick)

    if (this.color)
        button.addClass(styles[this.color])

    return this.element
  }
}