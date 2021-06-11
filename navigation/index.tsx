/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";

import LinkingConfiguration from "./LinkingConfiguration";

import { Text, View, StyleSheet, Image } from "react-native";

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <HomeScreen />
    </NavigationContainer>
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={require("../img/login_png_1.png")} />
      <View>
        <Text style={styles.getStarted}>Get Started</Text>
        <Text style={styles.logIn}>Log In</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  getStarted: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 34,
    color: "#ffffff",
    backgroundColor: "#FF7A7A",
  },
  logIn: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    paddingHorizontal: 34,
    color: "#FF7A7A",
  },
});

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
