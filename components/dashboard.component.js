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
            width: "85%",
            justifyContent: "space-evenly",
            marginVertical: 20,
            padding: 10,
            fontFamily: "JosefinSans_500Medium",
            backgroundColor: "#f8f9fb",
          }}
        >
          <Avatar
            style={{
              width: 60,
              height: 60,
              borderColor: "black",
              borderWidth: 1,
            }}
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
        <Layout
          style={{
            backgroundColor: "#f8f9fb",
            width: "80%",
            display: "flex",
            alignItems: "center",
            borderColor: "#f4f4f4",
            borderWidth: 2,
          }}
        ></Layout>
      </Layout>
    </>
  );
};
