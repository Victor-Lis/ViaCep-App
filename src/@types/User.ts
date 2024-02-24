import { Adress } from "./Adress";

export type UserType = {
  key: string;
  email: string;
  name: string;
  senha: string;
  enderecos: Adress[];
};
