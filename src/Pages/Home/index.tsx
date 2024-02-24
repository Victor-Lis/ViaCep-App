import { ReactNode, useContext, useEffect } from "react"
import { View, Text, FlatList } from "react-native"
import AdressCard from "./Components/AdressCard"

import { Adress } from "../../@types/Adress"

import { Container } from "./styles"
import { AuthContext } from "../../Providers/Auth"

export default function Home() {
	const { user } = useContext(AuthContext)
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
				extraData={(item: Adress, index: number) => index}
			/>
		</Container>
	)
}
