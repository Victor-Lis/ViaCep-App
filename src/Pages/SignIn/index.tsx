import React, { useContext, useState } from "react";
import {
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Container, Logo, Input, ButtonLogin, ButtonLoginText } from './styles'
import { signIn } from "../../Services/Firebase/auth/signin";
import { signUp } from "../../Services/Firebase/auth/signup";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function SignIn() {

  const { setUser, } = useAuthContext()

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [type, setType] = useState<boolean>(false);
  // type: true == "Cadastro" | false == "Login"

  async function handleLogin() {
    if (type && !name && !email && !password) return;
    if (!type && !email && !password) return;

    if (type) {
      console.log("Cadastro")
      let authDatas = { name, email, password }
      let data = await signUp({ name, email, password, setContext: setUser });
    } else {
      console.log("Login")
      let data = await signIn({ email, password, setContext: setUser });      
    }
  }

  return (
    <Container>
      <Logo style={{marginTop: Platform.OS === "android" ? 55 : 80}}>ViaCep App</Logo>
      <Text style={{ marginBottom: 20 }}>
        Cadastre seus endereços, agilize sua vida!
      </Text>

      {type && (
        <Input
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Qual seu nome?"
          placeholderTextColor="#99999B"
        />
      )}

      <Input
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Seu email"
        placeholderTextColor="#99999B"
      />

      <Input
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Sua senha"
        placeholderTextColor="#99999B"
      />

      <ButtonLogin
        style={[
          { backgroundColor: type ? "#F53745" : "#57DD86" },
        ]}
        onPress={handleLogin}
      >
        <ButtonLoginText>{type ? "Cadastrar" : "Acessar"}</ButtonLoginText>
      </ButtonLogin>

      <TouchableOpacity onPress={() => setType(!type)}>
        <Text>{type ? "Já possuo uma conta" : "Criar uma nova conta"}</Text>
      </TouchableOpacity>
    </Container>
  );
}