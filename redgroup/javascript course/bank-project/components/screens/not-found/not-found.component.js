import { AbstractScreen } from "@/core/component/abstract-screen.component";

export class NotFound extends AbstractScreen{
  constructor() {
    super('Page not found')
  }
  render() {
    return '<p>Not Found</p>'
  }
}