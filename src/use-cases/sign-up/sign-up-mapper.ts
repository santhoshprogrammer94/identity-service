import { User } from "src/infrastructure/database/user/user.entity";
import { SignUpRequest } from "./sign-up-request";

export class SignUpMapper {

    request(item:SignUpRequest):Partial<User> {
        var result:Partial<User>= {
            name:item.name,
            email:item.email,
            username:item.username,
            password:item.password
        }
        return result;
    }
}