import { createContext, ReactNode, useEffect, useState } from "react";
import { Adress } from "../../@types/Adress";
import { getAdress } from "./utils/getAdress";

interface CepContextData {
  allAdress: Adress[];
  getDatas: () => Promise<Adress[] | undefined>;
}

export const CepContext = createContext({} as CepContextData);

export const CepProvider = ({ children }: { children: ReactNode }) => {
  const [allAdress, setAllAdress] = useState<Adress[]>([]);

  async function getDatas(): Promise<Adress[] | undefined> {
    let data = await getAdress();
    if (data) {
      setAllAdress(data as Adress[]);
      return data;
    }
  }

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <CepContext.Provider value={{ allAdress, getDatas }}>
      {children}
    </CepContext.Provider>
  );
};
