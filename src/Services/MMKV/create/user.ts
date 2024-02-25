import { UserType } from "../../../@types/User";
import { storage } from "../mmkvConfig";

export async function setUser(user: UserType){
    storage.set("user", JSON.stringify(user))
}