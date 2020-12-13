import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PhotoMetadata } from "./PhotoMetadata";
import { User } from "./User";

@Entity()
export class Photo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @OneToOne(() => PhotoMetadata, (metadata) => metadata.photo)
  metadata: PhotoMetadata;

  @ManyToOne(() => User, (user) => user.photos)
  user: User;
}
