import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Photo } from "./Photo";

@Entity()
export class PhotoMetadata extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  //   @Column("int")
  //   height: number;

  //   @Column("int")
  //   width: number;

  //   @Column()
  //   orientation: string;

  //   @Column()
  //   compressed: boolean;

  @Column()
  comment: string;

  @OneToOne(() => Photo, (photo) => photo.metadata)
  @JoinColumn()
  photo: Photo;
}
