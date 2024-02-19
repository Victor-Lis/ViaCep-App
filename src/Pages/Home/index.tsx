import { ReactNode, useContext, useEffect } from "react"
import { View, Text, FlatList } from "react-native"
import { CepContext } from "../../Providers/CEP"
import AdressCard from "./Components/AdressCard"

import { Adress } from "../../@types/Adress"

import { Container } from "./styles"

export default function Home() {
	const { allAdress } = useContext(CepContext)

	return (
		<Container>
			<FlatList
				data={allAdress}
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
