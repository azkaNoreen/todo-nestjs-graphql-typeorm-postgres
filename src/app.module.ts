import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { User } from './user/schema/user.schema';
import { UserResolver } from './user/user.resolver';
import { UserService } from './user/user.service';
import { TodoEntity } from './todo/entities/todo.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'practice',
      entities:[User,TodoEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User,TodoEntity]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver:ApolloDriver,
      playground:true,
      autoSchemaFile: 'src/schema.graphql',
      definitions:{path:'src/graphql.ts'}
    })   ,
     TodoModule],
  controllers: [AppController],
  providers: [AppService,UserResolver,UserService],
})
export class AppModule {}
