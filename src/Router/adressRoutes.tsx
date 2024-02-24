import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../Pages/Home"
import { StatusBar } from "expo-status-bar"
import { RootRoutes } from "./adressRoutesType"
import AdressPage from "../Pages/AdressPage"

const Stack = createNativeStackNavigator<RootRoutes>()


export function AdressRoute() {
	return (
		<>
			<StatusBar hidden={true} />
			<Stack.Navigator>
				<Stack.Screen
					name="EndereçosStack"
					component={Home}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="Endereço"
					component={AdressPage}
					options={{
						headerShown: false,
					}}
				/>
			</Stack.Navigator>
		</>
	)
}
