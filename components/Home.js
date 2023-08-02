import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

export function Home({ user }) {
  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.title}>
        Welcome {user}!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    alignSelf: "center",
    fontSize: 24,
    marginTop: 8,
    marginBottom: 40,
  },
});
