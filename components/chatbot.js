import react from "react";
import React from "react";
import { View, text, StyleSheet, Image } from "react-native";
import ChatBot from "react-native-chatbot";
import { styles } from "styled-system";

const __styles = StyleSheet.create({
  container: {
    marginTop: 30,
    //flex: 1,
  },
  text: {
    fontSize: 25,
  },
});

const steps = [
  {
    id: "1",
    message: "Hello, how can I help you ? ",
    trigger: "2",
  },
  {
    id: "2",
    message: "Please select you issue:",
    trigger: "3",
  },
  {
    id: "3",
    //message: "Please select you issue:",
    options: [
      { value: "1", label: "Account issue", trigger: "4" },
      { value: "2", label: "Product issue", trigger: "4" },
      { value: "3", label: "Report seller", trigger: "4" },
      { value: "4", label: "Other issue", trigger: "4" },
    ],
  },
  {
    id: "4",
    message: "Enter your issue details",
    trigger: "5",
  },
  {
    id: "5",
    user: true,
    trigger: "6",
  },
  {
    id: "6",
    message: "Thanks for contacting us. We'll get back to you shortly",
    end: true,
  },
  //   {
  //     id: "5",
  //     options: [
  //       { value: "yes", label: "yes", trigger: "6" },
  //       { value: "no", label: "no", trigger: "7" },
  //     ],
  //   },
  //   {
  //     id: "6",
  //     message: "You choos yes !! ",
  //     trigger: "8",
  //     // ([value, steps]) => {
  //     //   //   alert(JSON.stringify(steps));
  //     //   if (steps["8"] === undefined) {
  //     //     return "8";
  //     //   } else {
  //     //     return "9";
  //     //   }
  //     //   return 8;
  //     //},
  //   },
  //   { id: "7", message: "You choos no !! ", trigger: "8" },
  //   {
  //     id: "8",
  //     message: "Can we move to next custom component",
  //     trigger: "10",
  //   },
  //   // {
  //   //   id: "9",
  //   //   message: "hello Zaks",
  //   //   Component: (
  //   //     <Image
  //   //       source={require("../assets/splash.png")}
  //   //       style={{ width: 300, height: 180 }}
  //   //     />
  //   //   ),
  //   //   trigger: "10",
  //   // },
  //   {
  //     id: "10",
  //     message: "ThankYou Bois",
  //     end: true,
  //   },
];

const Bot = () => {
  return (
    <View style={__styles.container}>
      <ChatBot steps={steps} />
    </View>
  );
};

export default Bot;
