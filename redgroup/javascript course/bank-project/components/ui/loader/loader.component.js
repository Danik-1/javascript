import { AbstractComponent } from "@/core/component/abstract-component.component";
import renderService from "@/core/services/render.service";

import template from "./loader.template.html";
import styles from "./loader.module.scss";
import { $J } from "@/core/jquery/jquery.lib";

export const LOADER_SELECTOR = '[data-component="loader"]'

export class Loader extends AbstractComponent {
  constructor(width = 100, height = 100) {
    super()

    this.width = width;
    this.height = height;
  }

  render() {
    this.element = renderService.htmlToElement(template, [], styles)

    $J(this.element).setCSSproperty('width', `${this.width}px`)
                    .setCSSproperty('height', `${this.height}px`)
                    .addClass('bounce')

    return this.element
  }
}