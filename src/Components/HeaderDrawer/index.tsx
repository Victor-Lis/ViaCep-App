import { DrawerHeaderProps } from "@react-navigation/drawer";
import { Text, TouchableOpacity } from "react-native";

import { HeaderContainer, NavbarTitle, NavbarMenu } from "./styles";
import Feather from 'react-native-vector-icons/Feather';

export default function Header({ props }: { props: DrawerHeaderProps }) {
  return (
    <HeaderContainer>
      <NavbarMenu 
        onPress={() => props.navigation.openDrawer()}
      >
        <Feather name="menu" size={30} style={{marginRight: 5}}/>
        <Text>Menu</Text>
      </NavbarMenu>
      <NavbarTitle>{props.route.name}</NavbarTitle>
    </HeaderContainer>
  );
}
