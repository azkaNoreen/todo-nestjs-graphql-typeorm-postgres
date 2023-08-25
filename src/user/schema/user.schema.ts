import { TodoEntity } from "src/todo/entities/todo.entity";
import { Column, Entity, PrimaryGeneratedColumn ,OneToMany} from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName:string

  @Column()
  lastName:string

  @Column()
  email:string

  @Column()
  password:string

  @Column()
  role:string

  @OneToMany( ()=> TodoEntity, (todo)=> todo.user)
todos:TodoEntity[]
}