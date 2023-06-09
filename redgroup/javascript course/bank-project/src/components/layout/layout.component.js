import renderService from "@/core/services/render.service"
import styles from './header/'
import { template } from "babel-core"
import { $R } from "@/core/rquery/rquery.lib"
import { Header } from "./header/header.component"

export class Layout {
    constructor({router, children}) {
        this.router = router
        this.children = children
    }

    render() {
        this.element = renderService.htmlToElement(template, [], styles)
        const mainElement = $R(this.element).find('main')
        mainElement.before(new Header().render())
        return this.element.outerHTML
    }
}