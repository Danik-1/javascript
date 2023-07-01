import renderService from "@/core/services/render.service"

import template from "./layout.template.html";
import styles from "./layout.module.scss";
import { $J } from "@/core/jquery/jquery.lib";
import { Header } from "../header/header.component";
import { AbstractComponent } from "@/core/component/abstract-component.component";

export class Layout extends AbstractComponent {
    constructor({ router, children }) {
        super()
        this.router = router
        this.children = children
    }

    render() {
        this.element = renderService.htmlToElement(template, [], styles)
        const contentContainer = $J(this.element).find('#content')
        contentContainer.appendChild(this.children)

        $J(this.element).find('main').before(new Header().render())
            .appendChild(contentContainer.element)

        return this.element
    }
}