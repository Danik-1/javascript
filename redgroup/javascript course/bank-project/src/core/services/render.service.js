import { BaseChild } from "../components/child.component"

class RenderService {
    /**
     * @param {string} html
     * @param {Array} components
     * @param {Object} [styles]
     * @returns {HTMLElement}
     */
    htmlToElement(html, components = [], styles) {
        const template = document.createElement('template')
        template.innerHTML = html.trim()

        const element = template.content.firstChild
        if (styles)
            this.#applyModuleStyles(styles, element)
        this.#replaceComponentTags(element, components)

        return element
    }

    /**
     * @param {HTMLElement} parentElement 
     * @param {Array} components 
     */
    #replaceComponentTags(parentElement, components) {
        const componentTagPattern = /^component-/
        const allElements = parentElement.getElementsByTagName('*')

        for (const element of allElements) {
            const lowerCaseTagName = element.tagName.toLowerCase()
            if (componentTagPattern.test(lowerCaseTagName)) {
                const componentName = lowerCaseTagName
                    .replace(componentTagPattern, '')
                    .replace(/-/g, '')

                const foundComponent = components.find(Component => {
                    const instance = Component instanceof BaseChild
                        ? Component : new Component()

                    return instance.constructor.name.toLowerCase() ===
                        componentName
                })

                if (foundComponent) {
                    const componentContent =
                        foundComponent instanceof BaseChild
                            ? foundComponent.render()
                            : new foundComponent().render()
                    element.replaceWith(componentContent)
                }
                else {
                    throw new Error(`Component ${componentName}
                        not found in provided components array`)
                }
            }

        }
    }


    /**
     * 
     * @param {Object} moduleStyles 
     * @param {string} element 
     * @returns {void}
     */
    #applyModuleStyles(moduleStyles, element) {
        if (!element)
            return
    
        const applyStyles = element => {
            for (const [key, value ] of Object.entries(moduleStyles)) {
                const classList = element.classList
                if (classList.contains(key)) {
                    classList.remove(key)
                    classList.add(value)
                }
            }
        }

        if (element.getAttribute('class'))
            applyStyles(element)

        element.querySelectorAll('*').forEach(applyStyles)
    }
}

export default new RenderService()