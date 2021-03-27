import React from "react";
import { Image } from "react-native";
import { Button, Layout, Icon, useTheme, Text } from "@ui-kitten/components";
export const AuthScreen = ({ navigation }) => {
  const theme = useTheme();
  const navigateOTP = () => {
    navigation.navigate();
  };

  return (
    <>
      <Layout
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Image
          resizeMode="contain"
          style={{ width: "70%" }}
          source={require("../assets/logo.png")}
        />
        <Layout style={{ display: "flex", alignItems: "center", width: "80%" }}>
          <Button
            style={{ margin: 2, width: "50%" }}
            accessoryLeft={(props) => <Icon {...props} name="google-outline" />}
          >
            CONNECT
          </Button>
          <Text
            style={{
              fontStyle: "italic",
              color: "gray",
              marginTop: 5,
              textAlign: "center",
              width: "70%",
            }}
          >
            We automatically parse transaction data from your email.
          </Text>
          <Button appearance="ghost">Privacy Policy</Button>
        </Layout>
      </Layout>
    </>
  );
};
