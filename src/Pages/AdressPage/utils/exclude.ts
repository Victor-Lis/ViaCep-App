import { Adress } from "../../../@types/Adress";
import { db } from "../../../Services/firebaseConfig";
import { ref, remove } from "firebase/database"

export async function exclude({adress}: {adress: Adress}){
	try {
		const reference = ref(db, `enderecos/${adress.id}`)
        let data = await remove(reference)
        return true
	} catch (e) {
		console.log(e)
        return e
	}
}