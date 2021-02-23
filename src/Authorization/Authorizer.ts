import { Account, SessionToken, TokenGenerator } from "../Server/Model";
import { UserCredentialsDBAccess } from "./UseCredentialsDBAccess";

export class Authorizer implements TokenGenerator {
  private userCredDBAccess: UserCredentialsDBAccess = new UserCredentialsDBAccess();

  async generateToken(account: Account): Promise<SessionToken | undefined> {
    const resultAccount = await this.userCredDBAccess.getUserCredential(
      account.username,
      account.password
    );

    if (resultAccount) {
      return {
        tokenId: "someTokeId",
      };
    } else {
      return undefined;
    }
  }
}
