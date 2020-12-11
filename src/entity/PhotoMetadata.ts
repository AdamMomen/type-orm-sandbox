import {
  BaseEntity,
  Column,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Photo } from "./Photo";

export class PhotoMetadata extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("int")
  height: number;

  @Column("int")
  width: number;

  @Column()
  orientation: string;

  @Column()
  compressed: boolean;

  @Column()
  comment: string;

  @OneToOne(() => Photo)
  @JoinColumn()
  photo: Photo;
}
