import { User } from "src/user/schema/user.schema";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TodoEntity  {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title :string

  @Column()
  date :string

  @Column()
  completed :boolean 

  @ManyToOne( ()=>User, (user)=>user.todos  )
  user:User
}