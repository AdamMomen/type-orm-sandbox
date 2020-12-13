import "reflect-metadata";
import { createConnection } from "typeorm";
import { Category } from "./entities/Category";
import { Question } from "./entities/Question";
import { Photo } from "./entities/Photo";
import { User } from "./entities/User";
import { PhotoMetadata } from "./entities/PhotoMetadata";
const connectionConfig = require("../ormconfig.json");

const main = async () => {
  /* creates mySQL database connection */
  const conn = await createConnection(connectionConfig);
  //reload
  const metadata = new PhotoMetadata();
  metadata.comment = "this is an amazing photo";
  await PhotoMetadata.save(metadata);

  const photo = new Photo();
  photo.url = "photo1.jpg";
  photo.metadata = metadata;

  // Photo.save(photo);
  // const category1 = new Category();
  // category1.name = "animals";
  // await Category.save(category1);

  // const category2 = new Category();
  // category2.name = "zoo";
  // await Category.save(category2);

  // const question = new Question();
  // question.title = "dogs";
  // question.text = "who let the dogs out?";
  // question.categories = [category1, category2];
  // await Question.save(question);
  // await Photo.delete({ id: 6});
  console.log(await Photo.find({ relations: ["metadata"] }));
  // console.log(
  //   await Question.createQueryBuilder("question")
  //     .leftJoinAndSelect("question.categories", "catogory")
  //     .getMany()
  // );
};

main().catch((e) => console.log(e));
