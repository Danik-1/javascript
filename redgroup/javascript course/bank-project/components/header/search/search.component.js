import { AbstractComponent } from "@/core/component/abstract-component.component";
import renderService from "@/core/services/render.service";

import template from "./search.template.html";
import styles from "./search.module.scss";

export class Search extends AbstractComponent {
  render() {
    this.element = renderService.htmlToElement(template, [], styles)
    return this.element
  }
}