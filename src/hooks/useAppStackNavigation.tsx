import { NavigationProp, useNavigation } from "@react-navigation/native"
import { RootRoutes } from "../Router/adressRoutesType"

type NavType = NavigationProp<RootRoutes>

export const useAppStackNavigation = () => {
	return useNavigation<NavType>()
}