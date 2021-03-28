import React, { useState } from "react";
import { Button, Layout, Icon, Text, Avatar } from "@ui-kitten/components";
import { PieChart } from "react-native-svg-charts";

export const DashboardScreen = ({ navigation }) => {
  const [touch, setTouch] = useState(false);
  let hoverStyles = {};
  if (touch) {
    hoverStyles = {
      backgroundColor: "#f4f4f4",
    };
  }
  const navigateToPage = (page) => {
    navigation.navigate(page);
  };

  const pieData = [5662, 9000]
    .filter((value) => value > 0)
    .map((value, index) => ({
      value,
      svg: {
        fill: index === 1 ? "#ef476f" : "#FFD166",
        onPress: () => navigateToPage("Expenses"),
      },
      key: `pie-${index}`,
    }));
  return (
    <Layout
      style={{
        display: "flex",
        height: "100%",
        alignItems: "center",
        width: "100%",
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
        onTouchStart={() => setTouch(true)}
        onTouchEnd={() => {
          setTouch(false);
          navigateToPage("Expenses");
        }}
        style={{
          backgroundColor: "#f8f9fb",
          width: "70%",
          display: "flex",
          borderColor: "#c3d0d9",
          borderWidth: 2,
          marginBottom: 20,
          ...hoverStyles,
        }}
      >
        <PieChart style={{ height: 220, padding: 20 }} data={pieData} />

        <Button
          appearance="ghost"
          accessoryRight={(p) => <Icon {...p} fill="gray" name="arrow-down" />}
        >
          {(e) => (
            <Text
              {...e}
              category="h6"
              style={{
                color: "gray",
                fontFamily: "JosefinSans_500Medium",
              }}
            >
              This month
            </Text>
          )}
        </Button>
        <Text
          style={{
            color: "black",
            fontFamily: "JosefinSans_700Bold",
            marginBottom: 10,
            alignSelf: "center",
          }}
          category="h1"
        >
          $5662/$9000
        </Text>
      </Layout>
      <Card
        name="Savings"
        icon="pie-chart-outline"
        handlePress={() => navigateToPage("Savings")}
      />
      <Card
        name="Spendings"
        icon="alert-circle-outline"
        handlePress={() => navigateToPage("Spendings")}
      />
      <Card
        name="Analysis"
        icon="bulb-outline"
        handlePress={() => navigateToPage("Analysis")}
      />
      <Card
        name="Predictions"
        icon="activity-outline"
        handlePress={() => navigateToPage("Predictions")}
      />
    </Layout>
  );
};

export const Card = ({ name, icon, handlePress }) => {
  const [touch, setTouch] = useState(false);
  let hoverStyles = {};
  if (touch) {
    hoverStyles = {
      backgroundColor: "#f4f4f4",
    };
  }
  return (
    <Layout
      onTouchStart={() => setTouch(true)}
      onTouchEnd={() => {
        setTouch(false);
        handlePress();
      }}
      style={{
        backgroundColor: "#f8f9fb",
        borderColor: "#c3d0d9",
        borderWidth: 2,
        width: "80%",
        height: 60,
        marginBottom: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 1,
        ...hoverStyles,
      }}
    >
      <Icon
        name={icon}
        fill="#000000"
        style={{ width: 32, height: 32, marginLeft: 20 }}
      />
      <Text
        category="h4"
        style={{
          fontFamily: "JosefinSans_400Regular",
        }}
      >
        {name}
      </Text>
      <Icon
        name="arrow-ios-forward-outline"
        fill="#000000"
        style={{ width: 32, height: 32, marginRight: 20 }}
      />
    </Layout>
  );
};
