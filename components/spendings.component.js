import React, { useState } from "react";
import { Button, Layout, Icon, Text } from "@ui-kitten/components";
import { TopNav } from "./topNav.component";

export const ErraticSpendingsScreen = ({ navigation }) => {
  const navigateToPage = (page) => {
    navigation.navigate(page);
  };

  return (
    <>
      <TopNav title="Erratic Spendings" navigation={navigation} />
      <Layout
        style={{
          display: "flex",
          height: "100%",
          alignItems: "center",
        }}
      >
        <Layout
          style={{
            backgroundColor: "#f8f9fb",
            width: "50%",
            display: "flex",
            alignItems: "center",
            borderColor: "#c3d0d9",
            borderWidth: 2,
            marginTop: 20,
            marginBottom: 40,
          }}
        >
          <Text
            style={{
              fontFamily: "JosefinSans_400Regular_Italic",
              marginVertical: 10,
            }}
          >
            Average Expenditure
          </Text>
          <Text
            category="h2"
            style={{ fontFamily: "JosefinSans_700Bold", marginBottom: 20 }}
          >
            $23-$25
          </Text>
        </Layout>
        <Card name="Starbucks" date="23/04/21" price={144} />
        <Card name="Costco" date="06/04/21" price={299} />
        <Card name="Target" date="03/04/21" price={90} />
        <Card name="Macy's" date="03/04/21" price={899} />
        <Card name="Taco Bell" date="02/04/21" price={100} />
        <Card name="Macy's" date="01/04/21" price={200} />
        <Icon
          name="more-horizontal-outline"
          fill="gray"
          style={{ height: 30, width: 30 }}
        />
      </Layout>
    </>
  );
};

export const Card = ({ name, date, price }) => {
  let color = "#f8c325";
  if (price >= 200) {
    color = "#cc495d";
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
        style={{
          marginLeft: 20,
          fontSize: 20,
          fontFamily: "JosefinSans_400Regular_Italic",
        }}
      >
        {date}
      </Text>
      <Text
        category="h4"
        style={{
          fontFamily: "JosefinSans_600SemiBold",
        }}
      >
        {name}
      </Text>
      <Text
        style={{
          marginRight: 20,
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
