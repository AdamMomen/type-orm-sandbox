import "reflect-metadata";
import { createConnection, EntityManager, Repository } from "typeorm";
import { Photo } from "./entity/Photo";
import { PhotoMetadata } from "./entity/PhotoMetadata";
const connectionOptions = require("../ormconfig.json");

const main = async () => {
  /* Getting database connection */
  const connection = await createConnection(connectionOptions);

  const photo = new Photo();
  photo.name = "smiley";
  photo.description = "this is an awesome picture";
  photo.filename = "smile.jpg";
  photo.views = 4;
  photo.isPublished = true;
  /**
   * getting the entities
   */
  // const photoRepo = connection.getRepository(Photo);
  //   const metaPhotRepo = connection.getRepository(PhotoMetadata);
  //   await metaPhotRepo.create();
  //   const meta = await metaPhotRepo.findOne(1);
  //   if (meta) console.log("Photo Metadata: \n", meta);
  //   const photo = await photoRepo.findOne(1);
  //   if (photo) console.log("found photos \n", photo);

  let metadata = new PhotoMetadata();
  metadata.height = 640;
  metadata.width = 480;
  metadata.compressed = true;
  metadata.comment = "cybershoot";
  metadata.orientation = "portrait";
  metadata.photo = photo;

  await PhotoMetadata.save(metadata);
};

main().catch((e) => console.log(e));
