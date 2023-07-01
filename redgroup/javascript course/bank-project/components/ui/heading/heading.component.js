import { AbstractComponent } from "@/core/component/abstract-component.component";
import renderService from "@/core/services/render.service";

import template from "./heading.template.html";
import styles from "./heading.module.scss";
import { $J } from "@/core/jquery/jquery.lib";

export class Heading extends AbstractComponent {
  constructor(title = '') {
    super()
    this.title = title;
  }
  render() {
    this.element = renderService.htmlToElement(template, [], styles)

    $J(this.element).textContent(this.title)

    return this.element
  }
}