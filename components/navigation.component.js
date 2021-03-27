import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthScreen } from "./auth.component";
const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Auth" component={AuthScreen} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
