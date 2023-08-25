import { ObjectType, Field,Int } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
@ObjectType()
export class Todo {

  @Field(() => Int)
  id: number;

  @Field()
  title:string

  @Field()
  date:string

  @Field()
  completed:boolean

  @Field(()=> User)
  user:User
}
