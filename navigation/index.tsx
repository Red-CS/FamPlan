/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";

import LinkingConfiguration from "./LinkingConfiguration";

import Dimensions from "../constants/Layout";
import Colors from "../constants/Colors";

import { useState } from "react";

import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  // SafeAreaView,
  ImageBackground,
  ScrollView,
} from "react-native";

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <HomeScreen />
    </NavigationContainer>
  );
}

function HomeScreen() {
  const [scrollIndex, setScrollIndex] = useState(0);

  return (
    <View style={styles.container}>
      <View style={{ height: 306 }}>
        <ScrollView
          style={{ flex: 1, height: 20 }}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={(e: any) => {
            setScrollIndex(
              Math.round(
                e.nativeEvent.contentOffset.x / Dimensions.window.width
              )
            );
          }}
        >
          <View style={styles.imgContainer}>
            <Image
              source={require("../img/login_png_1.png")}
              resizeMode="cover"
            />
          </View>
          <View style={styles.imgContainer}>
            <Image source={require("../img/login_png_1.png")} />
          </View>
          <View style={styles.imgContainer}>
            <Image source={require("../img/login_png_1.png")} />
          </View>
        </ScrollView>
      </View>
      <View style={styles.paginationWrapper}>
        {Array.from(Array(3).keys()).map((key, index) => (
          <View
            style={[
              styles.paginationDots,
              {
                backgroundColor:
                  scrollIndex === index
                    ? Colors.pagination.onPage
                    : Colors.pagination.offPage,
              },
            ]}
            key={index}
          />
        ))}
      </View>
      <View>
        <Pressable onPress={() => console.log("Pressed")}>
          <Text style={styles.getStarted}>Get Started</Text>
        </Pressable>
        <Text style={styles.logIn}>Log In</Text>
      </View>
      {/* <ImageBackground
        source={require("../img/IntroBackground.png")}
        style={styles.backgroundImage}
        resizeMode="contain"
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: Dimensions.window.width,
    height: Dimensions.window.height,
  },
  imgContainer: {
    flex: 1,
    alignItems: "center",
    width: Dimensions.window.width,
    height: 306,
  },
  paginationWrapper: {
    position: "absolute",
    bottom: 250,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: "#0898A0",
    marginHorizontal: 10,
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
    color: "#ff7A7A",
  },
  backgroundImage: {
    position: "absolute",
    bottom: 0,
    height: 100,
    width: Dimensions.window.width,
    backgroundColor: "blue",
  },
});

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
