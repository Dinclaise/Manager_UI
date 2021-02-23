import { UserCredentialsDBAccess } from "../src/Authorization/UseCredentialsDBAccess";

class DbTest {
  public dbAccess: UserCredentialsDBAccess = new UserCredentialsDBAccess();
}

new DbTest().dbAccess.putUserCredential({
  username: "user1",
  password: "qwerty",
  accessRights: [1, 2, 3],
});
