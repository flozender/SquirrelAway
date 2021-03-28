import React, { useState } from "react";
import { LineChart, YAxis, XAxis, Grid } from 'react-native-svg-charts'
import { Button, Layout, Icon, Text, Modal, Input, Card as CardUI } from "@ui-kitten/components";
import { TopNav } from "./topNav.component";
import { StyleSheet, SafeAreaView, ScrollView, StatusBar, View } from "react-native";

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

export const SpendingsScreen = ({ navigation }) => {
  const navigateToPage = (page) => {
    navigation.navigate(page);
  };
  const [touch, setTouch] = useState(false);
  let hoverStyles = {};
  if (touch) {
    hoverStyles = {
      backgroundColor: "#f4f4f4",
    };
  }
  const [visible, setVisible] = React.useState(false);

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
          onTouchStart={() => setTouch(true)}
          onTouchEnd={() => {
            setTouch(false);
            setVisible(true)
          }}
          style={{
            backgroundColor: "#f8f9fb",
            width: "50%",
            display: "flex",
            alignItems: "center",
            borderColor: "#c3d0d9",
            borderWidth: 2,
            marginTop: 20,
            marginBottom: 40,
            ...hoverStyles
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
        <Modal backdropStyle={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
          onBackdropPress={() => setVisible(false)}
          style={{
            width: "100%",
          }} visible={visible}>
          <CardUI disabled={true}>
            <BarScreen />
          </CardUI>
        </Modal>
        <Card name="Macy's" date="13/03/21" price={899} />
        <Card name="Taco Bell" date="12/03/21" price={100} />
        <Card name="Amazon" date="12/03/21" price={613} />
        <Card name="Macy's" date="05/03/21" price={220} />
        <Card name="Apple" date="01/03/21" price={159} />
        <Icon
          name="more-horizontal-outline"
          fill="gray"
          style={{ height: 30, width: 30 }}
        />
      </Layout>
    </>
  );
};

const BarScreen = ({ }) => {

  const data = [899, 100, 50, 60, 888, 202, 555, 40, 60, 36, 88, 75, 4, 66, 52, 653, 80, 10, 5, 99, 40, 613, 220, 159, 20]

  const contentInset = { top: 20, bottom: 20 }

  return (
    <>
      <Text
        style={{
          fontFamily: "JosefinSans_400Regular_Italic",
          marginVertical: 10,
        }}
      >
        This Month's Expenditure
          </Text>
      <View style={{ height: 250, flexDirection: 'row' }}>
        <YAxis
          data={data}
          contentInset={contentInset}
          svg={{
            fill: 'grey',
            fontSize: 10,
          }}
          numberOfTicks={10}
          formatLabel={(value) => `$${value}`}
        />
        <LineChart
          style={{ flex: 1, marginLeft: 16 }}
          data={data}
          svg={{ stroke: 'rgb(134, 65, 244)' }}
          contentInset={contentInset}
        >
          <Grid />
        </LineChart>
      </View>
    </>
  )
}

const Card = ({ name, date, price }) => {
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
