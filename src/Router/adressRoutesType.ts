import { Adress } from "../@types/Adress"

export type RootRoutes = {
	EndereçosStack: undefined
	// "Criar Endereço": {
	// 	cep: string
	// }
	"Endereço": {
		endereco: Adress;
	}
}
