import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Router } from "./src/Router";
import { CepProvider } from "./src/Providers/CEP/";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar hidden />
      <NavigationContainer>
        <CepProvider>
          <Router />
        </CepProvider>
      </NavigationContainer>
    </>
  );
}
