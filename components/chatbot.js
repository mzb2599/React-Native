import react from "react";
import React from "react";
import { View, text, StyleSheet, Image } from "react-native";
import Chatbot from "react-native-chatbot";

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
  },
});

const steps = [
  {
    id: "1",
    message: "hello how are you ? ",
    trigger: "2",
  },
  {
    id: "2",
    message: "SUBSCRIBE TO US",
    trigger: "3",
  },
  {
    id: "3",
    user: true,
    trigger: "4",
  },
  {
    id: "4",
    message: "Great",
    trigger: "5",
  },
  {
    id: "5",
    options: [
      { value: "yes", lable: "yes", trigger: "6" },
      { value: "no", lable: "no", trigger: "7" },
    ],
  },
  {
    id: "6",
    message: "You choos yes !! ",
    trigger: ([value, steps]) => {
      //   alert(JSON.stringify(steps));
      if (steps["8"] === undefined) {
        return "8";
      } else {
        return "9";
      }
      return 8;
    },
  },
  { id: "7", message: "You choos no !! ", trigger: "8" },
  {
    id: "8",
    message: "Can we move to next custom component",
    trigger: "5",
  },
  {
    id: "9",
    message: "hello Zaks",
    // Component: (
    //   <Image
    //     source={require("./exampleimage.jpg")}
    //     style={{ width: 300, height: 180 }}
    //   />
    // ),
    trigger: "10",
  },
  {
    id: "10",
    message: "ThankYou Bois",
    end: true,
  },
];

export const chatbot = () => {
  return (
    <View style={style.container}>
      <Chatbot steps={steps} />
    </View>
  );
};
