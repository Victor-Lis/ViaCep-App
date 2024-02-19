import { NavigationProp, useNavigation } from "@react-navigation/native"
import { RootRoutes } from "../Router/stackRoutesType"

type NavType = NavigationProp<RootRoutes>

export const useAppStackNavigation = () => {
	return useNavigation<NavType>()
}