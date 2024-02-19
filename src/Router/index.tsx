import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"

const Drawer = createDrawerNavigator<RootRoutes>()

import Header from "../Components/HeaderDrawer"

import Home from "../Pages/Home"
import CreateCEP from "../Pages/Create"
import { StatusBar } from "expo-status-bar"
import { RootRoutes } from "./drawerRoutesType"
import AdressPage from "../Pages/AdressPage"
import { AdressRoute } from "./adressRoute"

export function Router() {
	return (
		<>
			<StatusBar hidden={true} />
			<Drawer.Navigator>
				<Drawer.Screen
					name="Endereços"
					component={AdressRoute}
					options={{
						header: (props) => <Header props={props} />,
					}}
				/>
				<Drawer.Screen
					name="Criar Endereço"
					component={CreateCEP}
					options={{
						header: (props) => <Header props={props} />,
					}}
				/>
			</Drawer.Navigator>
		</>
	)
}
