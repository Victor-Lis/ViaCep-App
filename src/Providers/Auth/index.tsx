import { createContext, ReactNode, useEffect, useState } from "react";
import { UserType } from "../../@types/User";
import { ref, DatabaseReference, get } from "firebase/database";
import { db } from "../../Services/firebaseConfig";
import { Adress } from "../../@types/Adress";

interface AuthContextData {
  user: UserType | undefined;
  setUser: React.Dispatch<React.SetStateAction<UserType | undefined>>;
  enderecosRef: DatabaseReference | undefined;
  enderecosRefString: string | undefined;
  getUserDatas: () => Promise<UserType | undefined>
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType | undefined>();
  const [enderecosRefString, setEnderecosRefString] = useState<string | undefined>()
  const [enderecosRef, setEnderecosRef] = useState<DatabaseReference | undefined>()

  async function getUserDatas(): Promise<UserType | undefined>{
    const userRef = ref(db, `usuarios/${user?.key}`)
    const data: UserType = await get(userRef)
    .then((res) => res.val())
    .catch(e => alert(e)) 
    if(data){
      data.key = user?.key as string
      if (data?.enderecos) {
        const enderecosValues: Adress[] = Object.values(data.enderecos);
        const enderecosKeys = Object.keys(data.enderecos);

        enderecosKeys.map((key, index) => {
          enderecosValues[index].id = key;
        });

        data.enderecos = enderecosValues as Adress[];
      }else{
        data.enderecos = []
      }
      setUser(data)
      return data
    }
  }

  useEffect(() => {
    if(user){
      console.log(user)
      setEnderecosRefString(`usuarios/${user.key}/enderecos`)
      setEnderecosRef(ref(db, `usuarios/${user.key}/enderecos`))
    }
  }, [user])

  return (
    <AuthContext.Provider value={{ user, setUser, enderecosRef, enderecosRefString, getUserDatas }}>
      {children}
    </AuthContext.Provider>
  );
};
