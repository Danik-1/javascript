import { AbstractComponent } from "@/core/component/abstract-component.component";
import renderService from "@/core/services/render.service";

import template from "./logout-button.template.html";
import styles from "./logout-button.module.scss";

export class LogoutButton extends AbstractComponent {
  render() {
    this.element = renderService.htmlToElement(template, [], styles)
    return this.element
  }
}