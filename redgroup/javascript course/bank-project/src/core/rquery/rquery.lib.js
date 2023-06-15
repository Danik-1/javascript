/**
 * Represents a query to the DOM
 */
class RQuery {
    /**
     * Create a new RQuery instance
     * @param {string | HTMLElement} selector - a CSS selector string or HTMLElement
     */
    constructor(selector) {
        if (typeof(selector) === 'string') {
            this.element = document.querySelector(selector)

            if (!this.element)
                throw new Error(`Element ${selector} not found`)
        }
        else if (selector instanceof HTMLElement)
            this.element = selector
        else
            throw new TypeError('Selector must be a string or HTMLElement')
    }

    /**
     * Finds the first element that matches the given selector
     * @param {string} selector - a CSS selector string
     * @returns {RQuery} - RQuery instance of the found element
     */
    find(selector) {
        const element = new RQuery(this.element.querySelector(selector))

        if (element)
            return element
        else
            throw new Error(`Element ${selector} not found`)
    }

    /**
     * Appends given child element to existing element
     * @param {HTMLElement} childElement
     * @returns {RQuery} - RQuery instance of the changed element
     */
    append(childElement) {
        if (! (childElement instanceof HTMLElement))
            throw new TypeError('element should be an HTML element')

        this.element.appendChild(childElement)
        return this
    }

    /**
     * Appends given child element to existing element
     * @param {HTMLElement} element
     * @returns {RQuery} - RQuery instance of the changed element
     */
    before(element) {
        if (! (element instanceof HTMLElement))
            throw new TypeError('element should be an HTML element')
            
        this.element.appendChild(element)
        return this
    }

    /**
     * Adds or changes css property with the given value
     * @param {string} property
     * @param {string} value 
     * @returns {RQuery} - Returns RQuery instance of the changed element
     */
    css(property, value) {
        if (typeof property !== 'string' || typeof value !== 'string')
            throw new TypeError('property and value must be strings')

        this.element.style[property] = value

        return this
    }
}

/**
 * Create a new RQuery instance
 * @param {string | HTMLElement} selector - a CSS selector string or HTMLElement
 * @returns {RQuery}
 */
export function $R(selector) {
    return new RQuery(selector)
}