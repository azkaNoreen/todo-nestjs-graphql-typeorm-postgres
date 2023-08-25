import { CreateTodoInput } from './dto/create-todo.input';
import { TodoEntity } from './entities/todo.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';
export declare class TodoService {
    private todoRepo;
    private userService;
    constructor(todoRepo: Repository<TodoEntity>, userService: UserService);
    create(createTodoInput: CreateTodoInput): Promise<TodoEntity>;
    findAllTodosNotCompletedById(userId: number): Promise<TodoEntity[]>;
    findAllTodosCompletedById(userId: number): Promise<TodoEntity[]>;
    update(id: number): Promise<string>;
    remove(id: number): Promise<string>;
}
