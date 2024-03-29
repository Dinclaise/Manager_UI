import { LoginService } from "../services/LoginService";
import { BaseController } from "./BaseController";
import { LinkTextValue } from "./Decorators";

export class LoginController extends BaseController {
  private loginService = new LoginService();

  private title = this.createElement("h2", "Please Login!");
  private userName = this.createElement("label", "Username: ");
  private userNameInput = this.createElement("input");
  private br = this.createElement("br");
  private breakElement = this.createElement("br");
  private userPassword = this.createElement("label", "Password: ");
  private passwordInput = this.createElement("input");

  private loginButton = this.createElement("button", "Login", async () => {
    if (this.userNameInput.value && this.passwordInput.value) {
      this.errorLabelText = "";
      const result = await this.loginService.login(
        this.userNameInput.value,
        this.passwordInput.value
      );

      if (result) {
        this.router.switchToDashboardView(result);
      } else {
        this.errorLabelText = "Wrong username or password";
      }
    } else {
      this.errorLabelText = "Please fill both fields";
    }
  });

  private errorLabel = this.createElement("label");

  @LinkTextValue("errorLabel")
  private errorLabelText: string = "";

  // after decorator below codes aren't need anymore!!!
  // private resetErrorLabel() {
  //   this.errorLabel.style.color = "red";
  //   this.errorLabel.style.visibility = "hidden";
  // }

  // private showErrorLabel(errorMessage: string) {
  //   this.errorLabel.innerText = errorMessage;
  //   this.errorLabel.style.visibility = "visible";
  // }

  public createView(): HTMLDivElement {
    this.errorLabel.id = "errorLabel";
    this.passwordInput.type = "Password";
    this.errorLabel.style.color = "red";
    // this.resetErrorLabel();

    return this.container;
  }
}
