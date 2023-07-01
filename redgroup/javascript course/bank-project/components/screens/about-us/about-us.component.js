import { AbstractScreen } from "@/core/component/abstract-screen.component";

export class AboutUs extends AbstractScreen {
  constructor() {
    super('About us')
  }
  render() {
    return '<p>About us</p>'
  }
}