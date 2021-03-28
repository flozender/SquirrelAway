import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthScreen } from "./auth.component";
import { DashboardScreen } from "./dashboard.component";
import { PersonalSavingsScreen } from "./personalSavings.component";
import { SavingsDashboardScreen } from "./savingsDashboard.component";
import { SpendingsScreen } from "./spendings.component";
import { ExpensesScreen } from "./expenses.component";
import { PredictionScreen } from "./prediction.component";
import { AnalysisScreen } from "./analysis.component";
import { SavingsGroupScreen } from "./savingsGroup.component";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Auth" component={AuthScreen} />
    <Screen name="Dashboard" component={DashboardScreen} />
    <Screen name="Savings Dashboard" component={SavingsDashboardScreen} />
    <Screen name="Personal Savings" component={PersonalSavingsScreen} />
    <Screen name="Savings Group" component={SavingsGroupScreen} />
    <Screen name="Spendings" component={SpendingsScreen} />
    <Screen name="Analysis" component={AnalysisScreen} />
    <Screen name="Expenses" component={ExpensesScreen} />
    <Screen name="Predictions" component={PredictionScreen} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
