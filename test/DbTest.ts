import { UserCredentialsDBAccess } from "../src/Authorization/UseCredentialsDBAccess";
import { UserDBAccess } from "../src/User/UserDBAccess";

class DbTest {
  public dbAccess: UserCredentialsDBAccess = new UserCredentialsDBAccess();
  public userDBAccess: UserDBAccess = new UserDBAccess();
}

// new DbTest().dbAccess.putUserCredential({
//   username: "user1",
//   password: "qwerty",
//   accessRights: [1, 2, 3],
// });

new DbTest().userDBAccess.putUser({
  age: "23",
  email: "test@test.com",
  id: "asd1221",
  name: "Tommy Cash",
  workingPosition: 0,
});
