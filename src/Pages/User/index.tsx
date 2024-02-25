import { useContext } from "react";
import { Text, TouchableOpacity, Platform } from "react-native";
import { Container, Logo, Input, ButtonLogin, ButtonLoginText } from "./styles";
import { AuthContext } from "../../Providers/Auth";
import { signOutFunction } from "../../Services/Firebase/auth/signout";

export default function User() {
  const { user, setUser } = useContext(AuthContext);

  async function handleSignOut() {
    setUser(undefined);
    signOutFunction();
  }

  return (
    <Container>
      <Logo style={{ marginTop: Platform.OS === "android" ? 55 : 80 }}>
        ViaCep App
      </Logo>
      <Text style={{ marginBottom: 20 }}>
        Cadastre seus endereços, agilize sua vida!
      </Text>

      <Input
        editable={false}
        value={user?.name}
        placeholder="Qual seu nome?"
        placeholderTextColor="#99999B"
      />

      <Input
        editable={false}
        value={user?.email}
        placeholder="Seu email"
        placeholderTextColor="#99999B"
      />

      <Input
        editable={false}
        value={user?.senha}
        placeholder="Sua senha"
        placeholderTextColor="#99999B"
      />

      <ButtonLogin
        onPress={handleSignOut}
      >
        <ButtonLoginText>Sair</ButtonLoginText>
      </ButtonLogin>
    </Container>
  );
}