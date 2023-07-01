import { AbstractScreen } from "@/core/component/abstract-screen.component";

export class Auth extends AbstractScreen {
  constructor() {
    super('Authentication')
  }
  render() {
    return '<p>Authentication</p>'
  }
}