import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Photo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column({ length: 100 })
  // name!: string;

  // @Column("text")
  // description: string;

  // @Column()
  // filename: string;

  // @Column("double")
  // views: number;

  // @Column()
  // isPublished: boolean;

  @Column()
  url: string;

  // @OneToOne(() => PhotoMetadata, (photoMetadata) => photoMetadata.photo, {
  //   cascade: true,
  // })
  // metadata: PhotoMetadata;

  @ManyToOne(() => User, (user) => user.photos)
  user: User;
}
