import { AbstractScreen } from "@/core/component/abstract-screen.component";
import renderService from "@/core/services/render.service";

import template from "./header.template.html";
import styles from "./header.module.scss";
import { Logo } from "./logo/logo.component";
import { LogoutButton } from "./logout-button/logout-button.component";
import { Search } from "./search/search.component";
import { UserItem } from "../ui/user-item/user-item.component";

export class Header extends AbstractScreen {
  constructor(){
    super('Home page')
  }
  
  render() {
    const testUser = {
      avatarPath: 'https://i.pinimg.com/originals/d6/84/0d/d6840d9e413c59fab3d9c843518fe351.jpg',
      name: 'Dan'
    }

    this.element = renderService.htmlToElement(template, [
      Logo, Search, new UserItem(testUser, false, () => alert('hey')), new LogoutButton()
    ], styles)
    return this.element
  }
}