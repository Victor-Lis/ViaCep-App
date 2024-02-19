import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Router } from "./src/Router";
import { CepProvider } from "./src/Providers/CEP/";
import { FirebaseProvider } from "./src/Providers/Firebase";

export default function App() {
  return (
    <NavigationContainer>
      <FirebaseProvider>
        <CepProvider>
          <Router />
        </CepProvider>
      </FirebaseProvider>
    </NavigationContainer>
  );
}
