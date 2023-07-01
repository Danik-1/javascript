import { AbstractComponent } from "@/core/component/abstract-component.component";
import renderService from "@/core/services/render.service";

import template from "./field.template.html";
import styles from "./field.module.scss";
import { $J } from "@/core/jquery/jquery.lib";

export class Field extends AbstractComponent {
  constructor({ placeholder, type = 'text', color = '', name, variant }) {
    super()

    if (!name)
      throw new Error('Please fill field name')

    this.placeholder = placeholder
    this.type = type
    this.color = color
    this.name = name
    this.variant = variant
  }

  render() {
    this.element = renderService.htmlToElement(template, [], styles)

    const inputElement =  $J(this.element).find('input').input({
      placeholder: this.placeholder,
      type: this.type,
      color: this.color,
      name: this.name
    })

    if (this.type === 'number')
      inputElement.numberInput()

    else if (this.type === 'credit-card')
      inputElement.creditCardInput()

    return this.element
  }
}