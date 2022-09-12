import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from "typeorm"
import { User } from "./User"

@Entity({ name: "feeds" })
export class Feed extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    nullable: false,
  })
  title: string

  @Column({
    nullable: false,
  })
  photo: string

  @Column({
    nullable: false,
  })
  description: string

  @ManyToOne(() => User, (User) => User.id)
  user: User
}
