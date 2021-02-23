import { UserCredentials } from "../Shared/Model";

export class UserCredentialsBDAccess {
  public async putUserCredential(
    userCredential: UserCredentials
  ): Promise<any> {}

  public async getUserCredential(
    username: string,
    password: string
  ): Promise<UserCredentials | undefined> {
    return undefined;
  }
}
