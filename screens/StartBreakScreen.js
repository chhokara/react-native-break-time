import React, { useState } from "react";
import { View, StyleSheet, Button, Dimensions, Alert } from "react-native";

import Card from "../components/Card";
import BodyText from "../components/BodyText";
import Input from "../components/Input";
import Colors from "../constants/Colors";
import MainButton from "../components/MainButton";

const StartBreakScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const numberInputHandler = (numberInput) => {
    setEnteredValue(numberInput.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    let chosenTime = parseInt(enteredValue);
    if (isNaN(chosenTime) || chosenTime <= 0 || chosenTime > 60) {
      Alert.alert(
        "Invalid time",
        "A break has to be between 0 and 60 minutes",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    setSelectedTime(chosenTime);
    setConfirmed(true);
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <BodyText>Time set for {selectedTime} minutes</BodyText>
        <MainButton onPress={() => console.log("hi")}>Start Game</MainButton>
      </Card>
    );
  }

  return (
    <View style={styles.screen}>
      <Card style={styles.inputContainer}>
        <BodyText>Select a Time</BodyText>
        <Input
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyBoardType="number-pad"
          maxLength={2}
          onChangeText={numberInputHandler}
          value={enteredValue}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Reset"
              onPress={() => resetInputHandler()}
              color={Colors.primary}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Confirm"
              onPress={() => confirmInputHandler()}
              color={Colors.accent}
            />
          </View>
        </View>
      </Card>
      {confirmedOutput}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
    maxWidth: "95%",
    minWidth: 300,
    alignItems: "center",
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 15,
  },
  button: { width: Dimensions.get("window").width / 4 },
  summaryContainer: {
    marginTop: 20,
  },
});
export default StartBreakScreen;
