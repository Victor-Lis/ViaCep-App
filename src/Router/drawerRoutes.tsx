import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator<RootRoutes>();

import Header from "../Components/HeaderDrawer";

import { RootRoutes } from "./drawerRoutesType";
import { AdressRoute } from "./adressRoutes";
import CreateCEP from "../Pages/Create";
import User from "../Pages/User";

export function MainRouter() {
  return (
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
      <Drawer.Screen
        name="Usuário"
        component={User}
        options={{
          header: (props) => <Header props={props} />,
        }}
      />
    </Drawer.Navigator>
  );
}
