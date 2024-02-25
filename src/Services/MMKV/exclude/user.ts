import { storage } from "../mmkvConfig";

export async function excludeUser(){
    storage.delete("user")
}