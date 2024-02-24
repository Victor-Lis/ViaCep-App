import { Adress } from "../../@types/Adress";
import { DatabaseReference, ref, set } from "firebase/database"

export async function edit({adress, enderecoRef}: {adress: Adress, enderecoRef: DatabaseReference}){
	try {
        let data = await set(enderecoRef, adress)        
        return true
	} catch (e) {
		console.log(e)
        return e
	}
}