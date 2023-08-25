import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './schema/user.schema';
import { Repository } from 'typeorm';


@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo:Repository<User>){}

  async   create(createUserInput: CreateUserInput):Promise<string> {
    let user:User=new User()
    user.firstName=createUserInput.firstName
    user.lastName=createUserInput.lastName
    user.email=createUserInput.email
    user.password=createUserInput.password
    user.role=createUserInput.role
    await this.userRepo.save(user)
    return "user created"
  }

  findAll() {
    return this.userRepo.find()
  }

  async remove(id: number):Promise<String> {
    let books=await this.userRepo.delete(id)
    return "user deleted"
  }
}
