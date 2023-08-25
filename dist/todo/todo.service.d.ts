import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
export declare class TodoService {
    create(createTodoInput: CreateTodoInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTodoInput: UpdateTodoInput): string;
    remove(id: number): string;
}
