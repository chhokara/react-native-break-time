import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "../components/Card";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";
import Colors from "../constants/Colors";

const BreakScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Card style={styles.timeContainer}>
        <TitleText style={styles.text}>{props.breakTime}:00</TitleText>
      </Card>
      <View style={styles.buttonContainer}>
        <MainButton>Start</MainButton>
        <MainButton style={{ backgroundColor: Colors.accent }}>Stop</MainButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 10, alignItems: "center" },
  timeContainer: { width: "80%", alignItems: "center", marginTop: 30 },
  text: { fontSize: 40 },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 30,
    marginVertical: 10,
  },
});
export default BreakScreen;
