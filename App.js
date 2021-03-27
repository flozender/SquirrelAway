import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import AppLoading from "expo-app-loading";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { AppNavigator } from "./components/navigation.component";
import { default as theme } from "./theme.json";
import { default as mapping } from "./mapping.json";

import {
  useFonts,
  JosefinSans_100Thin,
  JosefinSans_200ExtraLight,
  JosefinSans_300Light,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold,
  JosefinSans_100Thin_Italic,
  JosefinSans_200ExtraLight_Italic,
  JosefinSans_300Light_Italic,
  JosefinSans_400Regular_Italic,
  JosefinSans_500Medium_Italic,
  JosefinSans_600SemiBold_Italic,
  JosefinSans_700Bold_Italic,
} from "@expo-google-fonts/josefin-sans";

export default () => {
  let [fontsLoaded] = useFonts({
    JosefinSans_500Medium,
    JosefinSans_400Regular,
    JosefinSans_400Regular_Italic,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider
          {...eva}
          theme={{ ...eva.light, ...theme }}
          customMapping={mapping}
        >
          <SafeAreaView
            style={{ flex: 1, marginTop: StatusBar.currentHeight || 0 }}
          >
            <AppNavigator />
          </SafeAreaView>
        </ApplicationProvider>
      </>
    );
  }
};
