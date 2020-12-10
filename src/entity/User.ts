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
  
    static findByName(firstname:string, lastname:string){
        return this.createQueryBuilder("user")
        .where("user.firstname = :firstname", {firstname})
        .andWhere("user.lastname =:lastname", {lastname})
        .getMany();
        
    }
}
