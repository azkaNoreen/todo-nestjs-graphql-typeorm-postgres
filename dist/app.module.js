"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const user_schema_1 = require("./user/schema/user.schema");
const user_resolver_1 = require("./user/user.resolver");
const user_service_1 = require("./user/user.service");
const todo_entity_1 = require("./todo/entities/todo.entity");
const todo_resolver_1 = require("./todo/todo.resolver");
const todo_service_1 = require("./todo/todo.service");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'password',
                database: 'practice',
                entities: [user_schema_1.User, todo_entity_1.TodoEntity],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([user_schema_1.User, todo_entity_1.TodoEntity]),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                playground: true,
                autoSchemaFile: 'src/schema.graphql',
                definitions: { path: 'src/graphql.ts' }
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, user_resolver_1.UserResolver, user_service_1.UserService, todo_resolver_1.TodoResolver, todo_service_1.TodoService],
        exports: [user_service_1.UserService]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map