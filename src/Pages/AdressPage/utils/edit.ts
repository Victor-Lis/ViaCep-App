import { Adress } from "../../../@types/Adress";
import { db } from "../../../Services/firebaseConfig";
import { ref, set } from "firebase/database"

export async function edit({adress}: {adress: Adress}){
	try {
		const reference = ref(db, `enderecos/${adress.id}`)
        let data = await set(reference, adress)        
        return true
	} catch (e) {
		console.log(e)
        return e
	}
}