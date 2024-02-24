import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../Pages/Home"
import { StatusBar } from "expo-status-bar"
import { RootRoutes } from "./authRoutesType"
import AdressPage from "../Pages/AdressPage"
import SignIn from "../Pages/SignIn"

const Stack = createNativeStackNavigator<RootRoutes>()

export function AuthRoutes() {
	return (
		<>
			<StatusBar hidden={true} />
			<Stack.Navigator>
				<Stack.Screen
					name="SignIn"
					component={SignIn}
					options={{
						headerShown: false,
					}}
				/>
			</Stack.Navigator>
		</>
	)
}
