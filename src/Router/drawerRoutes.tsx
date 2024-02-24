import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator<RootRoutes>();

import Header from "../Components/HeaderDrawer";

import CreateCEP from "../Pages/Create";
import { RootRoutes } from "./drawerRoutesType";
import { AdressRoute } from "./adressRoutes";

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
    </Drawer.Navigator>
  );
}
