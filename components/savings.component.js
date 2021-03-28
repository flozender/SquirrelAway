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
          display: "flex",
          alignItems: "center",
        }}
      >
        <Layout
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginVertical: 30,
            padding: 20,
            fontFamily: "JosefinSans_500Medium",
            backgroundColor: "#f8f9fb",
            borderColor: "#c3d0d9",
            borderWidth: 2,
          }}
        >
          <Text
            style={{
              fontFamily: "JosefinSans_300Light",
              fontSize: 18,
            }}
          >
            Your Savings
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 40,
              textAlign: "center",
              fontFamily: "JosefinSans_700Bold",
            }}
          >
            $6637
          </Text>
        </Layout>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "JosefinSans_500Medium",
            marginBottom: 25,
          }}
        >
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
            paddingBottom: 20,
            backgroundColor: "#fff",
          }}
        >
          <Progress
            name="New Car"
            percentage={30}
            color="#3399FF"
            shadow="#abcff1"
          />
          <Progress
            name="Text Books"
            percentage={66}
            color="red"
            shadow="#edb6bf"
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            paddingBottom: 20,
            backgroundColor: "#fff",
          }}
        >
          <Progress
            name="Laptop"
            percentage={55}
            color="#f8c325"
            shadow="#fce7a8"
          />
          <Progress
            name="Furniture"
            percentage={19}
            color="#be34d0"
            shadow="#e5afed"
          />
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
          <Progress
            name="Gift for Alex"
            percentage={89}
            color="#00FA9A"
            shadow="#a1deda"
          />

          <View>
            <ProgressCircle
              percent={0}
              radius={50}
              borderWidth={8}
              color="#bcc4cc"
              shadowColor="#bcc4cc"
              bgColor="#fff"
            >
              <Text
                style={{
                  fontSize: 40,
                  fontWeight: "bold",
                  color: "#bcc4cc",
                  alignSelf: "center",
                }}
              >
                +
              </Text>
            </ProgressCircle>
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
                fontFamily: "JosefinSans_500Medium",
                marginTop: 10,
              }}
            >
              New Goal
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

const Progress = ({ name, percentage, color, shadow }) => {
  return (
    <View>
      <ProgressCircle
        percent={percentage}
        radius={50}
        borderWidth={10}
        color={color}
        shadowColor={shadow}
        bgColor="#fff"
      >
        <Text style={{ fontSize: 20, fontFamily: "JosefinSans_700Bold" }}>
          {`${percentage}%`}
        </Text>
      </ProgressCircle>
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          fontFamily: "JosefinSans_500Medium",
          marginTop: 10,
        }}
      >
        {name}
      </Text>
    </View>
  );
};
