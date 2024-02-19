import { Adress } from "../../../@types/Adress";
import { enderecosRef } from "../../../Services/firebaseConfig";
import { push } from "firebase/database";

export async function createAdress({endereco}:{endereco: Adress}) {
  try{
    let res = await push(enderecosRef, endereco)
    return res
  }catch(e){
    console.log(e)
  }
}
