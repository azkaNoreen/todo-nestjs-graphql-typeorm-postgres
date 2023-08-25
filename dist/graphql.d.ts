export interface CreateUserInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
}
export interface CreateTodoInput {
    title: string;
    id: number;
}
export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
}
export interface Todo {
    id: number;
    title: string;
    date: string;
    completed: boolean;
    user: User;
}
export interface IQuery {
    user(): User[] | Promise<User[]>;
    findAllTodosNotCompletedById(userId: number): Todo[] | Promise<Todo[]>;
    findAllTodosCompletedById(userId: number): Todo[] | Promise<Todo[]>;
}
export interface IMutation {
    createUser(createUserInput: CreateUserInput): string | Promise<string>;
    removeUser(id: number): string | Promise<string>;
    createTodo(createTodoInput: CreateTodoInput): Todo | Promise<Todo>;
    updateTodo(updateTodoInput: number): string | Promise<string>;
    removeTodo(id: number): string | Promise<string>;
}
