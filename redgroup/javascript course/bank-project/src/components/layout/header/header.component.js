import { BaseScreen } from '@/core/components/base-screen.component'
import renderService from '@/core/services/render.service'

import template from './header.template.html'
import styles from './header.module.scss'

export class Header extends BaseScreen {
    constructor() {
        super({ title: 'Header' })
    }
    
    render() {
        const element = renderService.htmlToElement(template, [], styles)
        return element.outerHTML
    }
}