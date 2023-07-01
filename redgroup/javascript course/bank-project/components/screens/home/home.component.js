import { AbstractScreen } from "@/core/component/abstract-screen.component";
import renderService from "@/core/services/render.service";
import template from "./home.template.html";
import styles from "./home.module.scss";

export class Home extends AbstractScreen {
  constructor(){
    super('Home page')
  }

  render() {
    const element = renderService.htmlToElement(template, [], styles)
    return element
  }
}