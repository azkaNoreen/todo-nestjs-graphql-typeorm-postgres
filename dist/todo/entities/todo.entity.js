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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoEntity = void 0;
const user_schema_1 = require("../../user/schema/user.schema");
const typeorm_1 = require("typeorm");
let TodoEntity = exports.TodoEntity = class TodoEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TodoEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TodoEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TodoEntity.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], TodoEntity.prototype, "completed", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_schema_1.User, (user) => user.todos),
    __metadata("design:type", user_schema_1.User)
], TodoEntity.prototype, "user", void 0);
exports.TodoEntity = TodoEntity = __decorate([
    (0, typeorm_1.Entity)()
], TodoEntity);
//# sourceMappingURL=todo.entity.js.map