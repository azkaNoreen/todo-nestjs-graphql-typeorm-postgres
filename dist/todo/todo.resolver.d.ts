import { TodoService } from './todo.service';
import { CreateTodoInput } from './dto/create-todo.input';
export declare class TodoResolver {
    private readonly todoService;
    constructor(todoService: TodoService);
    createTodo(createTodoInput: CreateTodoInput): Promise<import("./entities/todo.entity").TodoEntity>;
    findAllTodosNotCompletedById(userId: number): Promise<import("./entities/todo.entity").TodoEntity[]>;
    findAllTodosCompletedById(userId: number): Promise<import("./entities/todo.entity").TodoEntity[]>;
    updateTodo(updateTodoInput: number): Promise<string>;
    removeTodo(id: number): Promise<string>;
}
