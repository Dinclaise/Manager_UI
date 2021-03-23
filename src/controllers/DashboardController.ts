import { AccessRight, SessionToken } from "../models/AuthenticationModels";
import { BaseController } from "./BaseController";

export class DashboardController extends BaseController {
  private sessionToken: SessionToken | undefined;
  private searchArea: HTMLInputElement | undefined;
  private searchResultArea: HTMLDivElement | undefined;

  public setSessionToken(sessionToken: SessionToken) {
    this.sessionToken = sessionToken;
  }

  public createView(): HTMLDivElement {
    const title = this.createElement("h2", "Dashboard Controller");
    if (this.sessionToken) {
      this.createElement("label", `Welcome ${this.sessionToken.username}`);
      this.insertBreak();
      this.generateButtons();
    } else {
      this.createElement("label", "please go to the public parts of this app!");
    }
    return this.container;
  }

  private generateButtons() {
    if (this.sessionToken) {
      for (const access of this.sessionToken.accessRights) {
        this.createElement("button", AccessRight[access], async () => {
          await this.triggerAction(access);
        });
      }

      if (this.sessionToken.accessRights.includes(AccessRight.READ)) {
        this.insertBreak();
        this.createElement("label", "search:");
        this.searchArea = this.createElement("input");
        this.searchResultArea = this.createElement("div");
      }
    }
  }

  private async triggerAction(access: AccessRight) {
    console.log(`button ${access} clicked`);
    switch (access) {
      case AccessRight.READ:
        this.searchResultArea; //in progress
        break;

      default:
        break;
    }
  }
}
