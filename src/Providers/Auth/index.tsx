import { createContext, ReactNode, useEffect, useState } from "react";
import { UserType } from "../../@types/User";
import { ref, DatabaseReference, get } from "firebase/database";
import { db } from "../../Services/firebaseConfig";

interface AuthContextData {
  user: UserType | undefined;
  setUser: React.Dispatch<React.SetStateAction<UserType | undefined>>;
  enderecosRef: DatabaseReference | undefined;
  enderecosRefString: string | undefined;
  getUserDatas: () => void
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType | undefined>();
  const [enderecosRefString, setEnderecosRefString] = useState<string | undefined>()
  const [enderecosRef, setEnderecosRef] = useState<DatabaseReference | undefined>()

  async function getUserDatas(){
    const userRef = ref(db, user?.key as string)
    const data = await get(userRef).then((res) => res.val())
    if(data){
      setUser(data)
    }
  }

  useEffect(() => {
    if(user){
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
