import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity({ name: "roles" })
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  name: string;
}
