import { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Platform,
} from "react-native";
import { AuthContext } from "../../Providers/Auth";
import { signOutFunction } from "../../Services/auth/signout";

export default function User() {

  const { user, setUser } = useContext(AuthContext)

  async function handleSignOut(){
    setUser(undefined)
    signOutFunction()
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>Usuário</Text>
      <Text style={{ marginBottom: 20 }}>
        Veja seus dados!
      </Text>

      <TextInput
        editable={false}
        style={styles.input}
        value={user?.email}
        placeholder="Seu email"
        placeholderTextColor="#99999B"
      />

      <TextInput
        editable={false}
        style={styles.input}
        value={user?.senha}
        placeholder="Sua senha"
        placeholderTextColor="#99999B"
      />

      <TouchableOpacity
        style={[
          styles.buttonLogin,
          { backgroundColor: "#F53745" },
        ]}
        onPress={handleSignOut}
      >
        <Text style={styles.buttonText}>Sair</Text>
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
