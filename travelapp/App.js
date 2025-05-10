import React from "react";
import { StyleSheet, View, Text } from "react-native";
import LottieView from "lottie-react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.lottieWrapper}>
        <LottieView source={require("./assets/point.json")} autoPlay loop />
      </View>
      <Text style={styles.text}>travel app in development...</Text>
    </View>
  );
}

// styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  lottieWrapper: {
    width: 200,
    height: 200,
    overflow: "hidden", // Ensure nothing escapes this boundary
  },
  text: {
    marginTop: 20, // Add spacing between the animation and the text
    fontSize: 18, // Set font size
    fontWeight: "bold", // Optional: make text bold
    color: "#333", // Optional: set text color
  },
});
