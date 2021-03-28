import React from "react";
import ProgressCircle from "react-native-progress-circle";
import { Button, Layout, useTheme, Text } from "@ui-kitten/components";
import { TopNav } from "./topNav.component";
import { View } from "react-native";

export const SavingsScreen = ({ navigation }) => {
  const theme = useTheme();
  const navigateSavings = () => {
    navigation.navigate("Savings");
  };

  return (
    <>
      <TopNav title={"Savings"} navigation={navigation} />
      <Layout
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <Layout
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginVertical: 30,
            padding: 10,
            fontFamily: "JosefinSans_500Medium",
            backgroundColor: "#f8f9fb",
            borderColor: "#c3d0d9",
            borderWidth: 2,
          }}
        >
          <Text
            style={{
              fontFamily: "JosefinSans_500Medium",
              fontSize: 18,
            }}
          >
            Your Savings
          </Text>
          <Text
            style={{ fontWeight: "bold", fontSize: 40, textAlign: "center" }}
          >
            $6637
          </Text>
        </Layout>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Your Saving Goals
        </Text>
      </Layout>
      <View style={{ paddingBottom: 240, backgroundColor: "#fff" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            paddingBottom: 40,
            backgroundColor: "#fff",
          }}
        >
          <View>
            <ProgressCircle
              percent={30}
              radius={50}
              borderWidth={8}
              color="#3399FF"
              shadowColor="#999"
              bgColor="#fff"
            >
              <Text style={{ fontSize: 20 }}>{"30%"}</Text>
            </ProgressCircle>
            <Text style={{ fontSize: 20, textAlign: "center" }}>New Car</Text>
          </View>
          <View>
            <ProgressCircle
              percent={66}
              radius={50}
              borderWidth={8}
              color="red"
              shadowColor="#999"
              bgColor="#fff"
            >
              <Text style={{ fontSize: 20 }}>{"66%"}</Text>
            </ProgressCircle>
            <Text style={{ fontSize: 20, textAlign: "center" }}>
              Text Books
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: "#fff",
          }}
        >
          <View>
            <ProgressCircle
              percent={100}
              radius={50}
              borderWidth={8}
              color="#00FA9A"
              shadowColor="#999"
              bgColor="#fff"
            >
              <Text style={{ fontSize: 20 }}>{"100%"}</Text>
            </ProgressCircle>
            <Text style={{ fontSize: 20, textAlign: "center" }}>
              Gift for Alex
            </Text>
          </View>
          <View>
            <ProgressCircle
              percent={0}
              radius={50}
              borderWidth={8}
              color="gray"
              shadowColor="#999"
              bgColor="#fff"
            >
              <Text
                style={{
                  fontSize: 40,
                  fontWeight: "bold",
                  color: "gray",
                  alignSelf: "center",
                }}
              >
                {"+"}
              </Text>
            </ProgressCircle>
            <Text style={{ fontSize: 20, textAlign: "center" }}>New Goal</Text>
          </View>
        </View>
      </View>
    </>
  );
};
