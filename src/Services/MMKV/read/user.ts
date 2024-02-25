import { UserType } from "../../../@types/User";
import { storage } from "../mmkvConfig";

export async function getUser(){
    let user: UserType | string | undefined = storage.getString("user")
    if(user){
        user = JSON.parse(user) as UserType
        return user
    }
}