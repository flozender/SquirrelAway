import React from "react";
import { Button, Layout, Icon, Text } from "@ui-kitten/components";
import { TopNav } from "./topNav.component";
import { color } from "react-native-reanimated";

export const AnalysisScreen = ({ navigation }) => {
  const navigateToPage = (page) => {
    navigation.navigate(page);
  };

  return (
    <>
      <TopNav title="Analysis" navigation={navigation} />
      <Layout
        style={{
          display: "flex",
          height: "100%",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "JosefinSans_500Medium",
            fontSize: 30,
            marginVertical: 35,
          }}
        >
          Your Top 3 Expenses
        </Text>

        <Card name="Macy's" price={1199} />
        <Card name="Amazon" price={613} />
        <Card name="Costco" price={144} />
        <Insight percentage={60} expense="Macy's" saving="New Car" />
        <Insight percentage={34} expense="Amazon" saving="Text Books" />
      </Layout>
    </>
  );
};

const Card = ({ name, price }) => {
  let color = "#00FA9A";
  if (price >= 300) {
    color = "#cc495d";
  } else if (price >= 100 && price < 300) {
    color = "#f8c325";
  }
  return (
    <Layout
      style={{
        backgroundColor: "#f8f9fb",
        width: "100%",
        height: 50,
        marginBottom: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: "#c3d0d9",
        borderWidth: 1,
      }}
    >
      <Text
        category="h4"
        style={{
          fontFamily: "JosefinSans_600SemiBold",
          marginLeft: 25,
        }}
      >
        {name}
      </Text>
      <Text
        style={{
          marginRight: 25,
          fontSize: 30,
          fontFamily: "JosefinSans_700Bold",
          color,
        }}
      >
        {`$${price}`}
      </Text>
    </Layout>
  );
};

const Insight = ({ percentage, expense, saving }) => {
  let color = "#f8c325";
  if (percentage >= 50) {
    color = "#1aaf9e";
  }
  return (
    <Layout
      style={{
        backgroundColor: "#f8f9fb",
        borderColor: "#c3d0d9",
        borderWidth: 2,
        width: "80%",
        marginVertical: 15,
      }}
    >
      <Layout
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "transparent",
          justifyContent: "space-evenly",
        }}
      >
        <Text
          style={{
            color: color,
            fontSize: 40,
            fontFamily: "JosefinSans_700Bold",
            paddingHorizontal: 7,
            paddingVertical: 5,
          }}
        >
          {`${percentage}%`}
        </Text>
        <Text
          style={{
            color: "#c94c5f",
            fontSize: 22,
            fontFamily: "JosefinSans_600SemiBold",
            padding: 5,
          }}
        >
          {expense}
        </Text>
        <Icon
          name="swap-outline"
          fill="gray"
          style={{
            height: 22,
            width: 22,
          }}
        />
        <Text
          style={{
            color: "#1aaf9e",
            fontSize: 22,
            fontFamily: "JosefinSans_600SemiBold",
            padding: 5,
          }}
        >
          {saving}
        </Text>
      </Layout>
      <Layout
        style={{
          display: "flex",
          alignItems: "center",
          padding: 12,
          backgroundColor: "transparent",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "black",
            fontFamily: "JosefinSans_400Regular",
            textAlign: "center",
            padding: 3,
            lineHeight: 25,
          }}
        >
          {`Saving on ${expense} could've gotten you ${percentage}% closer to your ${saving}`}
        </Text>
      </Layout>
    </Layout>
  );
};
