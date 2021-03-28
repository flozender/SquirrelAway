import React, { useState } from "react";
import { Button, Layout, Icon, Text, Avatar } from "@ui-kitten/components";
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

export const SavingsGroupScreen = ({ navigation }) => {
  const navigateToPage = (page) => {
    navigation.navigate(page);
  };

  return (
    <>
      <TopNav title="Walter Family" navigation={navigation} />
      <Text
        style={{
          fontFamily: "JosefinSans_700Bold",
          fontSize: 20,
          textAlign: "center",
          backgroundColor: "#fff",
          padding: 10,
        }}
      >
        {" "}
        Group Code: XLVV2
      </Text>
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
            width: "90%",
            height: "15%",
            display: "flex",
            alignItems: "center",
            borderColor: "#c3d0d9",
            borderWidth: 2,
            marginTop: 20,
            marginBottom: 40,
          }}
        >
          <Text
            category="h2"
            style={{
              fontFamily: "JosefinSans_700Bold",
              marginBottom: 10,
              marginTop: 10,
              color: "green",
            }}
          >
            68%
          </Text>
          <Text
            style={{
              fontFamily: "JosefinSans_400Regular_Italic",
              fontSize: 20,
            }}
          >
            Towards a New Television
          </Text>
        </Layout>
        <Card name="Jane Walter" avatar="photo.jpg" percent={39} />
        <Card name="Randy Walter" avatar="photo.jpg" percent={24} />
        <Card name="John Walter" avatar="photo.jpg" percent={18} />
        <Card name="Michelle Walter" avatar="photo.jpg" percent={8} />
        <Card name="Lone Walter" avatar="photo.jpg" percent={5} />
        <Icon
          name="more-horizontal-outline"
          fill="gray"
          style={{ height: 30, width: 30 }}
        />
      </Layout>
    </>
  );
};

const Card = ({ name, avatar, percent }) => {
  let color = "green";
  return (
    <Layout
      style={{
        backgroundColor: "#f8f9fb",
        width: "90%",
        height: 55,
        marginBottom: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: "#c3d0d9",
        borderWidth: 1,
      }}
    >
      <Avatar
        style={{
          width: 45,
          height: 45,
          borderColor: "black",
          borderWidth: 1,
          margin: 5,
        }}
        source={require("../assets/photo.jpg")}
      />
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
        {`${percent}%`}
      </Text>
    </Layout>
  );
};
