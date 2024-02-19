import { Adress } from "../../../@types/Adress";

export async function getAdressDataByCEP({
  cep,
}: {
  cep: string;
}): Promise<Adress | undefined> {
  try {
    const data = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(async res => await res.json())
    .catch(e => console.log(e))

    return data as Adress;
  } catch (error) {
    console.log(error)
    return {
      bairro: "",
      cep,
      ddd: "",
      ibge: "",
      localidade: "",
      logradouro: "",
      siafi: "",
      uf: "",
      complemento: "",
      gia: "",
    };
  }
}

export async function getAdressData({
  logradouro,
  localidade,
  UF,
}: {
  logradouro: string;
  localidade: string;
  UF: string;
}): Promise<Adress | undefined> {
  try {
    const data = await fetch(
      `https://viacep.com.br/ws/${UF}/${localidade}/${logradouro}/json/`
    )
    .then(async res => await res.json())
    .catch(e => console.log(e))

    return data[0] as Adress;
  } catch (error) {
    return {
      bairro: "",
      cep: "",
      ddd: "",
      ibge: "",
      localidade,
      logradouro,
      siafi: "",
      uf: UF,
      complemento: "",
      gia: "",
    };
  }
}
