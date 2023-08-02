import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

// https://github.com/callstack/react-native-testing-library/blob/main/experiments-app/src/utils/helpers.ts#L3
export function buildEventLogger(name) {
  return (event) => {
    const eventData = event?.nativeEvent ?? event;
    console.log(`Event: ${name}`, eventData);
  };
}

const handleTextInput = buildEventLogger("textInput");
const handleChange = buildEventLogger("change");

export default function App() {
  const [value, setValue] = React.useState("");
  return (
    <View style={styles.container}>
      <Text accessibilityRole="header">Sign in to Example App</Text>
      <TextInput onTextInput={handleTextInput} onChange={handleChange} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
