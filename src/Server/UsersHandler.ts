import { IncomingMessage, ServerResponse } from "http";
import { HTTP_CODES, HTTP_METHODS } from "../Shared/Model";
import { UsersDBAccess } from "../User/UserDBAccess";
import { BaseRequestHandler } from "./BaseRequestHandler";
import { Handler } from "./Model";
import { Utils } from "./Utils";

export class UsersHandler extends BaseRequestHandler {
  private usersDBAccess: UsersDBAccess = new UsersDBAccess();

  constructor(req: IncomingMessage, res: ServerResponse) {
    super(req, res);
  }

  async handleRequest(): Promise<void> {
    switch (this.req.method) {
      case HTTP_METHODS.GET:
        await this.handleGet();
        break;

      default:
        this.handleNotFound();
        break;
    }
  }

  private async handleGet() {
    const parsedUrl = Utils.getUrlParameters(this.req.url);
  }
}
