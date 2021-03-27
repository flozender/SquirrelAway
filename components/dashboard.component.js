import React from "react";
import { Image } from "react-native";
import {
  Button,
  Layout,
  Icon,
  useTheme,
  Text,
  Avatar,
} from "@ui-kitten/components";

export const DashboardScreen = ({ navigation }) => {
  const theme = useTheme();
  const navigateDashboard = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <>
      <Layout
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <Layout
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "90%",
            justifyContent: "space-evenly",
            marginVertical: 20,
            padding: 10,
          }}
        >
          <Avatar
            style={{ width: 60, height: 60 }}
            source={require("../assets/photo.jpg")}
          />
          <Text
            category="h5"
            style={{
              fontFamily: "JosefinSans_500Medium",
            }}
          >
            Welcome Back, John
          </Text>
        </Layout>
      </Layout>
    </>
  );
};
