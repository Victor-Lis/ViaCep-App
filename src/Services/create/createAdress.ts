import { Adress } from "../../@types/Adress";
import { DatabaseReference, push } from "firebase/database";

export async function createAdress({endereco, enderecosRef}:{endereco: Adress, enderecosRef: DatabaseReference}) {
  try{
    let res = await push(enderecosRef, endereco)
    return res
  }catch(e){
    console.log(e)
  }
}
