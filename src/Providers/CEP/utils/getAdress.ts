import { Adress } from "../../../@types/Adress"
import { app } from "../../../Services/firebaseConfig" 
import { DatabaseReference, get, getDatabase, ref } from "firebase/database"

export async function getAdress({enderecosRef}:{enderecosRef: DatabaseReference}) {
	try {
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
		console.log(dataArray)
		return dataArray
	} catch (e) {
		console.log(e)
		return []
	}
}
