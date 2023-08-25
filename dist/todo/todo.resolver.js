"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const todo_service_1 = require("./todo.service");
const create_todo_input_1 = require("./dto/create-todo.input");
const todo_schema_1 = require("./schema/todo.schema");
let TodoResolver = exports.TodoResolver = class TodoResolver {
    constructor(todoService) {
        this.todoService = todoService;
    }
    createTodo(createTodoInput) {
        return this.todoService.create(createTodoInput);
    }
    async findAllTodosNotCompletedById(userId) {
        return this.todoService.findAllTodosNotCompletedById(userId);
    }
    async findAllTodosCompletedById(userId) {
        return this.todoService.findAllTodosNotCompletedById(userId);
    }
    updateTodo(updateTodoInput) {
        return this.todoService.update(updateTodoInput);
    }
    removeTodo(id) {
        return this.todoService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => todo_schema_1.Todo),
    __param(0, (0, graphql_1.Args)('createTodoInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_todo_input_1.CreateTodoInput]),
    __metadata("design:returntype", void 0)
], TodoResolver.prototype, "createTodo", null);
__decorate([
    (0, graphql_1.Query)(() => [todo_schema_1.Todo]),
    __param(0, (0, graphql_1.Args)('userId', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "findAllTodosNotCompletedById", null);
__decorate([
    (0, graphql_1.Query)(() => [todo_schema_1.Todo]),
    __param(0, (0, graphql_1.Args)('userId', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "findAllTodosCompletedById", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    __param(0, (0, graphql_1.Args)('updateTodoInput', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TodoResolver.prototype, "updateTodo", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TodoResolver.prototype, "removeTodo", null);
exports.TodoResolver = TodoResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoResolver);
//# sourceMappingURL=todo.resolver.js.map