import { NavigationProp, useNavigation } from "@react-navigation/native"
import { RootRoutes } from "../Router/drawerRoutesType"

type NavType = NavigationProp<RootRoutes>

export const useAppDrawerNavigation = () => {
	return useNavigation<NavType>()
}