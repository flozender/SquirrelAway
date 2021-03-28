import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthScreen } from "./auth.component";
import { DashboardScreen } from "./dashboard.component";
import { SavingsScreen } from "./savings.component";
import { ErraticSpendingsScreen } from "./spendings.component";
import { ExpensesScreen } from "./expenses.component";
import { PredictionScreen } from "./prediction.component";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Auth" component={AuthScreen} />
    <Screen name="Dashboard" component={DashboardScreen} />
    <Screen name="Savings" component={SavingsScreen} />
    <Screen name="Erratic Spendings" component={ErraticSpendingsScreen} />
    <Screen name="Expenses" component={ExpensesScreen} />
    <Screen name="Predictions" component={PredictionScreen} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
