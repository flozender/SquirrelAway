import React from "react";
import {
  Icon,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";

export const TopNav = ({ title }) => {
  const BackIcon = (props) => <Icon {...props} name="arrow-back" />;
  const BackAction = () => <TopNavigationAction icon={BackIcon} />;
  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <TopNavigation
      title={(evaProps) => (
        <Text
          {...evaProps}
          style={{ fontFamily: "JosefinSans_500Medium", fontSize: 25 }}
        >
          {title}
        </Text>
      )}
      alignment="center"
      accessoryLeft={BackAction}
      style={{
        backgroundColor: "#f8f9fb",
        borderColor: "#c3d0d9",
        borderWidth: 2,
        marginTop: 3,
      }}
      onPress={navigateBack}
    />
  );
};
