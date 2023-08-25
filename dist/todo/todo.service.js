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
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const todo_entity_1 = require("./entities/todo.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const user_service_1 = require("../user/user.service");
let TodoService = exports.TodoService = class TodoService {
    constructor(todoRepo, userService) {
        this.todoRepo = todoRepo;
        this.userService = userService;
    }
    async create(createTodoInput) {
        let todo = new todo_entity_1.TodoEntity();
        todo.title = createTodoInput.title;
        todo.date = new Date().toLocaleString();
        todo.completed = false;
        todo.user = await this.userService.findUserByID(createTodoInput.id);
        return this.todoRepo.save(todo);
    }
    findAllTodosNotCompletedById(userId) {
        return this.todoRepo.find({ relations: ['user'], where: { user: { id: userId }, completed: false }, });
    }
    findAllTodosCompletedById(userId) {
        return this.todoRepo.find({ relations: ['user'], where: { user: { id: userId }, completed: true }, });
    }
    async update(id) {
        let up = await this.todoRepo.findOneBy({ id: id });
        up.completed = true;
        await this.todoRepo.save(up);
        return "done";
    }
    async remove(id) {
        await this.todoRepo.delete(id);
        return "deleted";
    }
};
exports.TodoService = TodoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(todo_entity_1.TodoEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        user_service_1.UserService])
], TodoService);
//# sourceMappingURL=todo.service.js.map