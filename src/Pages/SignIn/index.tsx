import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Platform,
} from "react-native";
import { signIn } from "../../Services/auth/signin";
import { signUp } from "../../Services/auth/signup";
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
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>ViaCep App</Text>
      <Text style={{ marginBottom: 20 }}>
        Cadastre seus endereços, agilize sua vida!
      </Text>

      {type && (
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Qual seu nome?"
          placeholderTextColor="#99999B"
        />
      )}

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Seu email"
        placeholderTextColor="#99999B"
      />

      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Sua senha"
        placeholderTextColor="#99999B"
      />

      <TouchableOpacity
        style={[
          styles.buttonLogin,
          { backgroundColor: type ? "#F53745" : "#57DD86" },
        ]}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>{type ? "Cadastrar" : "Acessar"}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setType(!type)}>
        <Text>{type ? "Já possuo uma conta" : "Criar uma nova conta"}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  logo: {
    marginTop: Platform.OS === "android" ? 55 : 80,
    fontSize: 28,
    fontWeight: "bold",
  },
  input: {
    color: "#121212",
    backgroundColor: "#EBEBEB",
    width: "90%",
    borderRadius: 6,
    marginBottom: 10,
    paddingHorizontal: 8,
    height: 50,
  },
  buttonLogin: {
    width: "90%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 6,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 19,
  },
});
