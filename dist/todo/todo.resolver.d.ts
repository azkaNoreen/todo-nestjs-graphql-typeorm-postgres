import { TodoService } from './todo.service';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
export declare class TodoResolver {
    private readonly todoService;
    constructor(todoService: TodoService);
    createTodo(createTodoInput: CreateTodoInput): string;
    findAll(): string;
    findOne(id: number): string;
    updateTodo(updateTodoInput: UpdateTodoInput): string;
    removeTodo(id: number): string;
}
