import { BaseController } from "./BaseController";

export class LoginController extends BaseController {
  public createView(): HTMLDivElement {
    const title = this.createElement("h2", "Please Login!");

    const userName = this.createElement("label", "Username: ");

    const userNameInput = this.createElement("input");

    const breakElement = this.createElement("br");

    const userPassword = this.createElement("label", "Password: ");

    const passwordInput = this.createElement("input");
    passwordInput.type = "Password";

    const loginButton = this.createElement("button", "Login");

    this.container.append(
      title,
      userName,
      userNameInput,
      breakElement,
      userPassword,
      passwordInput,
      loginButton
    );

    return this.container;
  }
}
