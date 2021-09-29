import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Login from "./components/login.js";
import Signup from "./components/Signup";
import WelcomeScreen from "./components/WelcomeScreen.js";
//import Calculator from "./components/calculator.js";
import { Calculator } from "react-native-calculator";
//import { Bot } from "./components/chatbot.js";
import ChatBot from "react-native-chatbot";
import Bot from "./components/chatbot.js";
import Main from "./components/main.js";

export default function App() {
  return (
    // <View style={{ flex: 1 }}>
    //   <Calculator style={{ flex: 1 }} />
    // </View>

    // <Bot />

    <Main />
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    marginLeft: 100,
    marginTop: 120,
    marginBottom: 50,
  },
  bg: {
    height: "100%",
    backgroundColor: "#FFFBE6",
    //backgroundColor: "#B9E4C9",
  },
});
