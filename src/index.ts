import { AppDataSource } from "./data-source";
import { Student } from "./entity/Student";

AppDataSource.initialize()
  .then(async () => {
    console.log("Inserting a new user into the database...");
    const user = new Student();
    user.firstName = "Vinay";
    user.lastName = "M";
    user.age = 25;
    await AppDataSource.manager.save(user);
    console.log(`[SAVED] Student with id ${user.id} has been saved`);

    console.log("Loading users from the database...");
    const users = await AppDataSource.manager.find(Student);
    console.log("Loaded users: ", users);

  })
  .catch((error) => console.log(error))
