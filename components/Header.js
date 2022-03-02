import React from "react";
import { View, StyleSheet, Platform } from "react-native";

import Colors from "../constants/Colors";
import TitleText from "./TitleText";

const Header = (props) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <TitleText style={styles.title}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
  },
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  headerIOS: {
    backgroundColor: "white",
    borderBottomColor: Colors.primary,
    borderBottomWidth: 1,
  },
  headerAndroid: { backgroundColor: Colors.primary },
});

export default Header;
