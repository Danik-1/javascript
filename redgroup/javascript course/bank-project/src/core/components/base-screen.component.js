import { getTitle } from "@/config/seo.component";

export class BaseScreen {
    /**
     * Create a new BaseScreen instance
     * @param {Object} options - the options for the BaseScreen
     * @param {string} options.title - the title for the screen  
     */
    constructor({ title }) {
        document.querySelector('title').innerHTML = getTitle(title);
    }
    render() {
        throw new Error(`Render method must be implemented
                         in the child class`)
    }
}