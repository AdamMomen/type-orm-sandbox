import "reflect-metadata";
import { createConnection } from "typeorm";
import { Photo } from "./entities/Photo";
import { PhotoMetadata } from "./entities/PhotoMetadata";
const connectionConfig = require("../ormconfig.json");

const main = async () => {
  /* Getting database connection */
  const conn = await createConnection(connectionConfig);

  /**
   * getting the entities
   */

  const photo = new Photo();
  photo.name = "smiley";
  photo.description = "this is an awesome picture";
  photo.filename = "smile.jpg";
  photo.views = 4;
  photo.isPublished = true;

  const foundPhoto = Photo;
  const metadata = new PhotoMetadata();
  metadata.height = 640;
  metadata.width = 480;
  metadata.compressed = true;
  metadata.comment = "cybershoot";
  metadata.orientation = "portrait";
  // metadata.photo = Photo.findOne(1) !== undefined  Photo.findOne(1) : photo;

  await PhotoMetadata.save(metadata);
};

main().catch((e) => console.log(e));
