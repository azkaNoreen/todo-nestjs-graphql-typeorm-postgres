
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateUserInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
}

export interface CreateTodoInput {
    exampleField: number;
}

export interface UpdateTodoInput {
    exampleField?: Nullable<number>;
    id: number;
}

export interface Todo {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
}

export interface IQuery {
    user(): User[] | Promise<User[]>;
    todo(id: number): Todo | Promise<Todo>;
}

export interface IMutation {
    createUser(createUserInput: CreateUserInput): string | Promise<string>;
    removeUser(id: number): string | Promise<string>;
    createTodo(createTodoInput: CreateTodoInput): Todo | Promise<Todo>;
    updateTodo(updateTodoInput: UpdateTodoInput): Todo | Promise<Todo>;
    removeTodo(id: number): Todo | Promise<Todo>;
}

type Nullable<T> = T | null;
