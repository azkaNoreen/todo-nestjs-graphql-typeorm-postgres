import { CreateUserInput } from './dto/create-user.input';
import { User } from './schema/user.schema';
import { Repository } from 'typeorm';
export declare class UserService {
    private userRepo;
    constructor(userRepo: Repository<User>);
    create(createUserInput: CreateUserInput): Promise<string>;
    findAll(): Promise<User[]>;
    findUserByEmail(email: string): Promise<User>;
    findUserByID(id: number): Promise<User>;
    remove(id: number): Promise<String>;
}
