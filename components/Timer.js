import React from "react";
import { View, StyleSheet } from "react-native";
import { useTimer } from "react-timer-hook";

import Card from "./Card";
import TitleText from "./TitleText";
import MainButton from "./MainButton";
import Colors from "../constants/Colors";

function Timer({ expiryTimestamp }) {
  const { minutes, seconds, resume, pause } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire was called"),
  });

  return (
    <Card style={styles.timeContainer}>
      <TitleText style={styles.text}>
        {minutes}:{seconds}
      </TitleText>
      <View style={styles.buttonContainer}>
        <MainButton onPress={resume}>Start</MainButton>
        <MainButton onPress={pause} style={{ backgroundColor: Colors.accent }}>
          Stop
        </MainButton>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  timeContainer: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  text: { fontSize: 40 },
});

export default Timer;
