import { ObjectType, Field } from '@nestjs/graphql';


@ObjectType()
export class Todo {

  @Field()
  id: number;

  @Field()
  firstName:string

  @Field()
  lastName:string

  @Field()
  email:string

  @Field()
  password:string

  @Field()
  role:string 

}
