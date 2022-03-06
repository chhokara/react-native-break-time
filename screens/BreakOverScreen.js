import React from "react";
import { View, StyleSheet, Image } from "react-native";

import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";

const BreakOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText style={styles.title}>The Break is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/break.jpeg")}
          resizeMode="cover"
        />
      </View>
      <MainButton onPress={props.startNewBreak}>New Break</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    width: 300,
    height: 300,
    borderRadius: 150,
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default BreakOverScreen;
