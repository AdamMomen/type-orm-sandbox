import "reflect-metadata";
import { createConnection } from "typeorm";
import { Photo } from "./entities/Photo";
import { User } from "./entities/User";
const connectionConfig = require("../ormconfig.json");

const main = async () => {
  /* creates mySQL database connection */
  const conn = await createConnection(connectionConfig);
  // Photo.clear();
  // PhotoMetadata.clear();
  // User.clear();
};

main().catch((e) => console.log(e));
