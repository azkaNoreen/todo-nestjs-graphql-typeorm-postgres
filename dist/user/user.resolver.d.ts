import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
export declare class UserResolver {
    private userService;
    constructor(userService: UserService);
    createUser(createUserInput: CreateUserInput): Promise<string>;
    findAll(): Promise<import("./schema/user.schema").User[]>;
    removeUser(id: number): string;
}
