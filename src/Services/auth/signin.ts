import { get, getDatabase, ref, set } from "firebase/database";
import { auth, db } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { UserType } from "../../@types/User";
import { Dispatch, SetStateAction } from "react";
import { Adress } from "../../@types/Adress";

type SignInProps = {
  email: string;
  password: string;
  setContext: Dispatch<SetStateAction<UserType | undefined>>;
};

export async function signIn(authDatas: SignInProps) {
  const { email, password } = authDatas;
  // console.log('Email', email)
  // console.log('Password', password)
  await signInWithEmailAndPassword(auth, email, password)
    .then(async (user) => {
      const userRef = ref(db, `usuarios/${user.user.uid}`);
      await get(userRef).then(async (snapshot) => {
        let userDatas = await snapshot.val();
        userDatas["key"] = user.user.uid;

        if (userDatas?.enderecos) {
          const enderecosValues: Adress[] = Object.values(userDatas?.enderecos);
          const enderecosKeys = Object.keys(userDatas?.enderecos);

          enderecosKeys.map((key, index) => {
            enderecosValues[index].id = key;
          });

          userDatas.enderecos = enderecosValues as Adress[];
        }else{
          userDatas.enderecos = []
        }
        authDatas.setContext(userDatas as UserType);
      });
    })
    .catch((e) => {
      console.log("Error");
      console.log(e);
      alert(e);
    });
}
