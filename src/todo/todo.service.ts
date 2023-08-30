import { Injectable } from '@nestjs/common';
import { CreateTodoInput } from './dto/create-todo.input';
import { TodoEntity } from './entities/todo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';

//Add todo based on user id
//find all todos based on user id (not completed)
//find all completed todos based on user id (not completed)
//mark todo as completed based on todo id
//delete todo based on todo id

@Injectable()
export class TodoService {
  constructor(@InjectRepository(TodoEntity) private todoRepo: Repository<TodoEntity>,
    private userService: UserService) { }

  async create(createTodoInput: CreateTodoInput) {
    let todo: TodoEntity = new TodoEntity()
    todo.title = createTodoInput.title
    todo.date = new Date().toLocaleString()
    todo.completed = false
    todo.user = await this.userService.findUserByID(createTodoInput.id)
    return this.todoRepo.save(todo)
  }
 
  findAllTodosNotCompletedById(userId: number) {
    return this.todoRepo.find({ relations: ['user'], where: { user: { id: userId }, completed: false }, })
  }

  findAllTodosCompletedById(userId: number) {
    return this.todoRepo.find({ relations: ['user'], where: { user: { id: userId }, completed: true }, })
  }

  async update(id: number) {
    let up=await this.todoRepo.findOneBy({id:id})
    up.completed=true
    await this.todoRepo.save(up);
    return "done"
  }

  async remove(id: number) { 
    await this.todoRepo.delete(id)
    return "deleted"
  }
}
