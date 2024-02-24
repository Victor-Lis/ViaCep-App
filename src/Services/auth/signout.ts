import { signOut } from "firebase/auth"
import { auth } from "../firebaseConfig"

export function handleSignOut(navigation: any){
    signOut(auth)
    .then(()=>{
      navigation.navigate("SignIn")
    })
    .catch(()=>{
      console.log("NAO POSSUI NENHUM USUARIO")
    })
  }