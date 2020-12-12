import "reflect-metadata";
import { createConnection } from "typeorm";
import { Category } from "./entities/Category";
import { Question } from "./entities/Question";
import { Photo } from "./entities/Photo";
import { User } from "./entities/User";
const connectionConfig = require("../ormconfig.json");

const main = async () => {
  /* creates mySQL database connection */
  const conn = await createConnection(connectionConfig);

  // const foundUsers = await User.createQueryBuilder("user")
  //   .leftJoinAndSelect("user.photos", "photo")
  //   .getMany();

  // if (foundUsers) console.log("this user has been found", foundUsers);

  const category1 = new Category();
  category1.name = "animals";
  await Category.save(category1);

  const category2 = new Category();
  category2.name = "zoo";
  await Category.save(category2);

  const question = new Question();
  question.title = "dogs";
  question.text = "who let the dogs out?";
  question.categories = [category1, category2];
  await Question.save(question);

  console.log(await Question.findOne({ relations: ["categories"] }));
};

main().catch((e) => console.log(e));
