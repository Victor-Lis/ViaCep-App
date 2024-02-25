import { signOut } from "firebase/auth"
import { auth } from "../firebaseConfig"

export function signOutFunction(){
    signOut(auth)
    .catch(()=>{
      console.log("NAO POSSUI NENHUM USUARIO")
    })
  }