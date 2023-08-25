import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { CreateTodoInput } from './dto/create-todo.input';
import { Todo } from './schema/todo.schema';

//Add todo based on user id
//find all todos based on user id (not completed)
//find all completed todos based on user id (not completed)
//mark todo as completed based on todo id
//delete todo based on todo id

@Resolver()
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Mutation(() => Todo)
  createTodo(@Args('createTodoInput') createTodoInput: CreateTodoInput) {
    return this.todoService.create(createTodoInput);
  }

  @Query(() => [Todo]) 
  async findAllTodosNotCompletedById(@Args('userId', { type: () => Int }) userId: number) {
    return this.todoService.findAllTodosNotCompletedById(userId);
  }

  @Query(() => [Todo]) 
  async findAllTodosCompletedById(@Args('userId', { type: () => Int }) userId: number) {
    return this.todoService.findAllTodosNotCompletedById(userId);
  }

  @Mutation
  (() => String)
  updateTodo(@Args('updateTodoInput', { type: () => Int }) updateTodoInput: number) {
    return this.todoService.update(updateTodoInput);
  }

  @Mutation(() => String)
  removeTodo(@Args('id', { type: () => Int }) id: number) {
    return this.todoService.remove(id);
  }
}
