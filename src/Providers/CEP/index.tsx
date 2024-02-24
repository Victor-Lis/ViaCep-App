import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Adress } from "../../@types/Adress";
import { getAdress } from "./utils/getAdress";
import { DatabaseReference } from "firebase/database";
import { AuthContext } from "../Auth";

interface CepContextData {
  allAdress: Adress[];
  getDatas: ({enderecosRef}:{enderecosRef: DatabaseReference}) => Promise<Adress[] | undefined>;
}

export const CepContext = createContext({} as CepContextData);

export const CepProvider = ({ children }: { children: ReactNode }) => {
  
  const { enderecosRef } = useContext(AuthContext)
  const [allAdress, setAllAdress] = useState<Adress[]>([]);

  async function getDatas({enderecosRef}:{enderecosRef: DatabaseReference}): Promise<Adress[] | undefined> {
    let data = await getAdress({enderecosRef: enderecosRef});
    if (data) {
      setAllAdress(data as Adress[]);
      return data;
    }
  }

  useEffect(() => {
    getDatas({enderecosRef: enderecosRef as DatabaseReference});
  }, []);

  return (
    <CepContext.Provider value={{ allAdress, getDatas }}>
      {children}
    </CepContext.Provider>
  );
};
