import { Adress } from "../../../@types/Adress"
import { app } from "../../../Services/firebaseConfig" 
import { get, getDatabase, ref } from "firebase/database"

export async function getAdress() {
	try {
		const db = getDatabase(app);
		const enderecosRef = ref(db, "/enderecos")
		let res = await get(enderecosRef)
		let data = await res.val()
		if(!data){
			throw new Error("Não há endereços")
		}
		let dataArray = Object.values(data) as Adress[]
		let keys = Object.keys(data)
		keys.map((key, index) => {
			dataArray[index].id = key
		})
		return dataArray
	} catch (e) {
		console.log(e)
		return []
	}
}
