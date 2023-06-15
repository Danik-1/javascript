import { BaseScreen } from "../../../core/components/base-screen.component";

export class NotFound extends BaseScreen {
    constructor() {
        super({ title: 'Not found' })
    }

    render() {
        return '<p>Not found</p>'
    }
}