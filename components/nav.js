import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Main from "../components/main.js";
import Calculator from "../components/calculator.js";
import { NavigationContainer } from "@react-navigation/native";
import Bot from "../components/chatbot.js";
import Login from "../components/login.js";
import Signup from "../components/Signup";
import Location from "../components/location.js";
import geolocation from "../components/geolocation.js";
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Main} />
        <Tab.Screen name="Calculator" component={Calculator} />
        <Tab.Screen name="ChatBot" component={Bot} />
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Signup" component={Signup} />
        <Tab.Screen name="Maps" component={geolocation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;
