import { BaseController } from "./BaseController";

export class MainController extends BaseController {
  public createView(): HTMLDivElement {
    const title = this.createElement("h2", "Welcome to our Main Page!");

    const article = this.createElement("div");
    article.innerText =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula pretium odio. Duis pretium a nisi ac iaculis. Mauris fringilla eget massa et scelerisque. Phasellus sit amet placerat nisl. Proin quam orci, iaculis pulvinar cursus sed, ullamcorper sed turpis. Nullam dui massa, sagittis vitae viverra eget, euismod vel tortor. Donec viverra turpis ex, ac maximus massa mattis placerat. Proin eu.";

    const button = this.createElement("button", "Login", () => {
      this.router.switchToLoginView();
    });

    return this.container;
  }
}
