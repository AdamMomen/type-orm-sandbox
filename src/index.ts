import "reflect-metadata";
import { createConnection } from "typeorm";
import { Photo } from "./entities/Photo";
import { User } from "./entities/User";
const connectionConfig = require("../ormconfig.json");

const main = async () => {
  /* creates mySQL database connection */
  const conn = await createConnection(connectionConfig);

  const foundUsers = await User.createQueryBuilder("user")
    .leftJoinAndSelect("user.photos", "photo")
    .getMany();

  if (foundUsers) console.log("this user has been found", foundUsers);
};

main().catch((e) => console.log(e));
