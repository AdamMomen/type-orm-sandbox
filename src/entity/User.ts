import { BaseEntity, Column, Entity, EntityRepository, PrimaryGeneratedColumn, Repository } from "typeorm";

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
}