import { Adress } from "../../../@types/Adress";
import { DatabaseReference, ref, remove } from "firebase/database"

export async function exclude({adress, enderecoRef}: {adress: Adress, enderecoRef: DatabaseReference}){
	try {
        let data = await remove(enderecoRef)
        return true
	} catch (e) {
		console.log(e)
        return e
	}
}