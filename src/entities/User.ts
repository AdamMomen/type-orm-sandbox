import {
  BaseEntity,
  Column,
  Entity,
  EntityRepository,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Repository,
} from "typeorm";
import { Photo } from "./Photo";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  isActive: boolean;

  @OneToMany(() => Photo, (photo) => photo.user, { cascade: true })
  photos: Photo[];
}
