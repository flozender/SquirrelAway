import React, { useState } from "react";
import ProgressCircle from "react-native-progress-circle";
import {
  Button,
  Layout,
  useTheme,
  Text,
  Modal,
  Card,
  Input,
} from "@ui-kitten/components";
import { TopNav } from "./topNav.component";
import { View } from "react-native";

export const PersonalSavingsScreen = ({ navigation }) => {
  const theme = useTheme();

  const [visible, setVisible] = useState(false);

  const [savings, setSavings] = useState([
    {
      name: "New Car",
      percentage: 30,
      color: "#3399FF",
      shadow: "#abcff1",
    },
    {
      name: "Text Books",
      percentage: 66,
      color: "red",
      shadow: "#edb6bf",
    },
    {
      name: "Laptop",
      percentage: 55,
      color: "#f8c325",
      shadow: "#fce7a8",
    },
    {
      name: "Furniture",
      percentage: 19,
      color: "#be34d0",
      shadow: "#e5afed",
    },
    {
      name: "Gift for Alex",
      percentage: 89,
      color: "#00FA9A",
      shadow: "#a1deda",
    },
  ]);
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
            flexWrap: "wrap",
          }}
        >
          {savings.map((e, i) => (
            <Progress
              key={i}
              name={e.name}
              percentage={e.percentage}
              color={e.color}
              shadow={e.shadow}
            />
          ))}
          <NewGoal handlePress={() => setVisible(true)} />
          <Modal
            visible={visible}
            backdropStyle={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
            style={{
              width: "80%",
            }}
            onBackdropPress={() => setVisible(false)}
          >
            <Card disabled={true}>
              <Text
                style={{
                  fontSize: 25,
                  textAlign: "center",
                  fontFamily: "JosefinSans_500Medium",
                  marginVertical: 10,
                }}
              >
                New Savings Plan
              </Text>
              <Input placeholder="Saving for" style={{ marginVertical: 5 }} />
              <Input
                accessoryLeft={(p) => (
                  <Text style={{ color: "gray", fontSize: 15 }}>$</Text>
                )}
                placeholder="Need to save"
                style={{ marginVertical: 5 }}
              />
              <Button
                onPress={() => {
                  setSavings((state) => [
                    ...state,
                    {
                      name: "Bicycle",
                      percentage: 0,
                      color: "#e88438",
                      shadow: "#dfba9e",
                    },
                  ]);
                  setVisible(false);
                }}
              >
                ADD
              </Button>
            </Card>
          </Modal>
        </View>
      </View>
    </>
  );
};

const Progress = ({ name, percentage, color, shadow }) => {
  return (
    <View
      style={{
        marginVertical: 10,
        display: "flex",
        alignItems: "center",
        paddingVertical: 3,
      }}
    >
      <ProgressCircle
        percent={percentage}
        radius={50}
        borderWidth={12}
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

const NewGoal = ({ handlePress }) => {
  return (
    <View
      style={{
        marginVertical: 10,
        display: "flex",
        alignItems: "center",
        paddingVertical: 3,
      }}
      onTouchEnd={() => handlePress()}
    >
      <ProgressCircle
        percent={0}
        radius={50}
        borderWidth={12}
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
          fontFamily: "JosefinSans_400Regular_Italic",
          marginTop: 10,
        }}
      >
        New Goal
      </Text>
    </View>
  );
};
