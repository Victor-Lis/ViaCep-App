import { RouteProp, useRoute } from "@react-navigation/native"
import { RootRoutes } from "../Router/stackRoutesType"
import { DrawerScreenProps } from "@react-navigation/drawer"

type Props = DrawerScreenProps<RootRoutes, 'Endereço'>

export const useAppRoute = <T extends keyof RootRoutes>(screen: T) => {
	return useRoute<RouteProp<RootRoutes, T>>()
}