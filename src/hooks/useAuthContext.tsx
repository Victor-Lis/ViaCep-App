import { AuthContext } from "../Providers/Auth"
import { useContext } from "react"

export const useAuthContext = () => {
	return useContext(AuthContext)
}