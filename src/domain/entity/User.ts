import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from "typeorm";

import { Role } from "./Roles";

@Entity({ name: "users" })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    nullable: true,
  })
  uid: string;

  @Column({
    nullable: false,
  })
  name: string;

  @Column({
    nullable: false,
  })
  email: string;

  @Column({
    nullable: false,
  })
  password: string;

  @ManyToOne(() => Role, (role) => role.id)
  role: Role;
}
