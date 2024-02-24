import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootRoutes } from "./adressRoutesType"
import { useContext } from "react"
import { AuthContext } from "../Providers/Auth"
import { AuthRoutes } from "./authRoutes"
import { MainRouter } from "./drawerRoutes"

export function Router() {

    const { user } = useContext(AuthContext)

	return (
        !user ? <AuthRoutes/> : <MainRouter/>
	)
}
