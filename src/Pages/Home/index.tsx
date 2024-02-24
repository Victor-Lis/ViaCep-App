import { ReactNode, useContext, useEffect } from "react"
import { View, Text, FlatList } from "react-native"
import { CepContext } from "../../Providers/CEP"
import AdressCard from "./Components/AdressCard"

import { Adress } from "../../@types/Adress"

import { Container } from "./styles"
import { AuthContext } from "../../Providers/Auth"

export default function Home() {
	const { user } = useContext(AuthContext)
	console.log(user)

	return (
		<Container>
			<FlatList
				data={user?.enderecos}
				renderItem={({ item, index }: { item: Adress; index: number }) => (
					<AdressCard adress={item} />
				)}
				keyExtractor={(item: Adress, index: number) =>
					`${item.ddd}${item.bairro}-${index}`
				}
			/>
		</Container>
	)
}
