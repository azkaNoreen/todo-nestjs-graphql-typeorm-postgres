import { User } from "src/user/schema/user.schema";
export declare class TodoEntity {
    id: number;
    title: string;
    date: string;
    completed: boolean;
    user: User;
}
