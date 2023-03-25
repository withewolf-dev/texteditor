import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, TextInput, SafeAreaView } from "react-native";
import { GapY } from "./custom_components";
// import { GapY } from "./custom_components";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <GapY />
        <TextInput
          placeholder="Heading i"
          style={{
            fontSize: 18,
            backgroundColor: "#284551",
            borderWidth: 0,
            fontWeight: "500",
            borderBottomWidth: 0,
            color: "white",
            paddingHorizontal: 10,
            paddingVertical: 4,
          }}
          placeholderTextColor="#89ccd7"
          underlineColorAndroid="transparent"
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#284551",
  },
});
