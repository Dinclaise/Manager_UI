import { UserCredentialsDBAccess } from "../src/Authorization/UseCredentialsDBAccess";
import { UsersDBAccess } from "../src/User/UserDBAccess";

class DbTest {
  public dbAccess: UserCredentialsDBAccess = new UserCredentialsDBAccess();
  public userDBAccess: UsersDBAccess = new UsersDBAccess();
}

new DbTest().dbAccess.putUserCredential({
  username: "user1",
  password: "qwerty",
  accessRights: [0, 1, 2, 3],
});

// new DbTest().userDBAccess.putUser({
//   age: "23",
//   email: "test@test.com",
//   id: "asd1221",
//   name: "Tommy Cash",
//   workingPosition: 0,
// });
