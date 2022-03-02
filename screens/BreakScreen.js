import React from "react";
import { View, StyleSheet } from "react-native";

import Timer from "../components/Timer";

const BreakScreen = (props) => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + props.breakTime * 60);

  return (
    <View style={styles.screen}>
      <Timer expiryTimestamp={time} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
});
export default BreakScreen;
