import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import BodyText from "./BodyText";
import Colors from "../constants/Colors";

const MainButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{ ...styles.button, ...props.style }}>
        <BodyText style={styles.buttonText}>{props.children}</BodyText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 12,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
  },
});
export default MainButton;
