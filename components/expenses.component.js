import React, { useState } from "react";
import { Button, Layout, Icon, Text } from "@ui-kitten/components";
import { TopNav } from "./topNav.component";
import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "white",
  },
  text: {
    fontSize: 42,
  },
});

export const ExpensesScreen = ({ navigation }) => {
  const navigateToPage = (page) => {
    navigation.navigate(page);
  };

  return (
    <ScrollView>
      <TopNav title="Expenses" navigation={navigation} />
      <Layout
        style={{
          display: "flex",
          height: "100%",
          alignItems: "center",
        }}
      >
        <Card name="Starbucks" date="17/03/21" margin={20} price={20} />
        <Card name="Costco" date="16/03/21" price={95} />
        <Card name="Target" date="13/03/21" price={90} />
        <Card name="Macy's" date="13/03/21" price={899} />
        <Card name="Taco Bell" date="12/03/21" price={100} />
        <Card name="Amazon" date="12/03/21" price={613} />
        <Card name="Costco" date="11/03/21" price={49} />
        <Card name="Best Buy" date="09/03/21" price={25} />
        <Card name="Toni & Guy" date="08/03/21" price={80} />
        <Card name="McDonald's" date="07/03/21" price={50} />
        <Card name="Macy's" date="05/03/21" price={220} />
        <Card name="7-Eleven" date="03/03/21" price={75} />
        <Card name="KFC" date="03/03/21" price={20} />
        <Card name="Build A Bear" date="01/03/21" price={100} />
        <Card name="Dollar Store" date="01/03/21" price={2} />
        <Icon
          name="more-horizontal-outline"
          fill="gray"
          style={{ height: 30, width: 30 }}
        />
      </Layout>
    </ScrollView>
  );
};

const Card = ({ name, date, price, margin = 0 }) => {
  let color = "black";
  return (
    <Layout
      style={{
        backgroundColor: "#f8f9fb",
        width: "100%",
        height: 50,
        marginTop: margin,
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
          fontFamily: "JosefinSans_500Medium",
        }}
      >
        {name}
      </Text>
      <Text
        style={{
          marginRight: 20,
          fontSize: 30,
          fontFamily: "JosefinSans_600SemiBold",
          color,
        }}
      >
        {`$${price}`}
      </Text>
    </Layout>
  );
};
