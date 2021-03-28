import React, { useState } from "react";
import {
  Button,
  Layout,
  Icon,
  Text,
  Modal,
  Input,
  Card as CardUI,
} from "@ui-kitten/components";
import { TopNav } from "./topNav.component";

export const SavingsDashboardScreen = ({ navigation }) => {
  const [touch, setTouch] = useState(false);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [groups, setGroups] = useState([
    {
      name: "Community Library",
    },
    {
      name: "Walter Family",
    },
    {
      name: "Save the Turtles",
    },
  ]);

  let hoverStyles = {};
  if (touch) {
    hoverStyles = {
      backgroundColor: "#f4f4f4",
    };
  }
  const navigateToPage = (page) => {
    navigation.navigate(page);
  };

  return (
    <>
      <TopNav title="Savings" navigation={navigation} />
      <Layout
        style={{
          display: "flex",
          height: "100%",
          alignItems: "center",
          width: "100%",
          paddingTop: 70,
          justifyContent: "space-between",
        }}
      >
        <Layout
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {groups.map((e, i) => (
            <Card
              key={i}
              name={e.name}
              handlePress={() => navigateToPage("Savings Group")}
            />
          ))}

          <Card
            name="Create/Join Group"
            handlePress={() => setVisible(true)}
            dashed={true}
          />
        </Layout>
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
          <CardUI disabled={true}>
            <Text
              style={{
                fontSize: 25,
                textAlign: "center",
                fontFamily: "JosefinSans_500Medium",
                marginVertical: 15,
              }}
            >
              Create a Savings Group
            </Text>
            <Input placeholder="Group name" style={{ marginVertical: 5 }} />
            <Input placeholder="Saving towards" style={{ marginVertical: 5 }} />
            <Input
              accessoryLeft={(p) => (
                <Text style={{ color: "gray", fontSize: 15 }}>$</Text>
              )}
              placeholder="Need to save"
              style={{ marginVertical: 5 }}
            />
            <Button
              style={{
                marginVertical: 10,
              }}
              onPress={() => {
                setGroups((groups) => [
                  ...groups,
                  {
                    name: "Uni Residence",
                  },
                ]);
                setVisible(false);
              }}
            >
              CREATE
            </Button>
            <Button
              appearance="outline"
              style={{
                marginVertical: 10,
              }}
              onPress={() => {
                setVisible(false);
                setVisible2(true);
              }}
            >
              JOIN AN EXISTING GROUP
            </Button>
          </CardUI>
        </Modal>
        <Modal
          visible={visible2}
          backdropStyle={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
          style={{
            width: "80%",
          }}
          onBackdropPress={() => setVisible2(false)}
        >
          <CardUI disabled={true}>
            <Text
              style={{
                fontSize: 25,
                textAlign: "center",
                fontFamily: "JosefinSans_500Medium",
                marginVertical: 15,
              }}
            >
              Join a Savings Group
            </Text>
            <Input placeholder="Group name" style={{ marginVertical: 5 }} />

            <Button
              style={{
                marginVertical: 10,
              }}
              onPress={() => {
                setVisible2(false);
              }}
            >
              JOIN
            </Button>
          </CardUI>
        </Modal>
        <Button
          size="large"
          style={{ marginBottom: 100 }}
          onPress={() => navigateToPage("Personal Savings")}
        >
          Personal Savings
        </Button>
      </Layout>
    </>
  );
};

export const Card = ({ name, handlePress, dashed }) => {
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
        marginBottom: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderStyle: dashed ? "dashed" : "solid",
        borderRadius: 1,
        ...hoverStyles,
      }}
    >
      <Text
        category="h4"
        style={{
          fontFamily: "JosefinSans_400Regular",
          marginLeft: 20,
        }}
      >
        {name}
      </Text>

      <Icon
        name={dashed ? "plus" : "arrow-ios-forward-outline"}
        fill="#000000"
        style={{ width: 32, height: 32, marginRight: 20 }}
      />
    </Layout>
  );
};
