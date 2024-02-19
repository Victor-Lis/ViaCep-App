import styled from "styled-components/native";

export const HeaderContainer = styled.View`

  width: 100%;
  height: 70px;
  padding: .5% 2%;
  background-color: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: .5px;
  border-bottom-color: #000;

`

export const NavbarTitle = styled.Text`

  color: #202020;
  font-size: 20px;
  font-weight: 400;

`

export const NavbarMenu = styled.TouchableOpacity`

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

`