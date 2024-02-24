import { ref, set } from "firebase/database";
import { auth, db } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Dispatch, SetStateAction } from "react";
import { UserType } from "../../@types/User";

type SignUpProps = {
  email: string;
  name: string;
  password: string;
  setContext: Dispatch<SetStateAction<UserType | undefined>>;
};

export async function signUp(userDatas: SignUpProps){
  const { name, email, password } = userDatas
  // console.log('Name', name)
  // console.log('Email', email)
  // console.log('Password', password)
  await createUserWithEmailAndPassword(auth, email, password)
    .then(async (user) => {
      console.log(user)
      const userRef = ref(db, `usuarios/${user.user.uid}`);
      await set(userRef, {
        email: email,
        name: name,
        senha: password,
        enderecos: "",
      }).then(async (snapshot) => {
        userDatas.setContext({
          key: user.user.uid,
          email: email,
          name: name,
          senha: password,
          enderecos: [],
        })
      })
    })
    .catch((e) => {
      console.log("Error", e);
      alert(e);
    });
}
