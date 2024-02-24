import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Router } from "./src/Router/index";
import { StatusBar } from "expo-status-bar";
import { AuthProvider } from "./src/Providers/Auth";

export default function App() {
  return (
    <>
      <StatusBar hidden />
      <NavigationContainer>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </NavigationContainer>
    </>
  );
}
