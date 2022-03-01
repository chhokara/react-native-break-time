import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import Header from "./components/Header";
import StartBreakScreen from "./screens/StartBreakScreen";
import BreakScreen from "./screens/BreakScreen";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [breakTime, setBreakTime] = useState(null);

  const startBreakHandler = (chosenTime) => {
    setBreakTime(chosenTime);
  };

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  let content = <StartBreakScreen onStartBreak={startBreakHandler} />;
  if (breakTime) {
    content = <BreakScreen breakTime={breakTime} />;
  }

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="auto" />
      <Header title="Break Time" />
      {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
