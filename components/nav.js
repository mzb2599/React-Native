import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Main from "../components/main.js";
import Calculator from "../components/calculator.js";
import { NavigationContainer } from "@react-navigation/native";
import Bot from "../components/chatbot.js";
import Login from "../components/login.js";
import Signup from "../components/Signup";
import geolocation from "../components/geolocation.js";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Main}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Calculator"
          component={Calculator}
          options={{
            tabBarLabel: "calculator",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="calculator"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ChatBot"
          component={Bot}
          options={{
            tabBarLabel: "chatbot",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="robot" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarLabel: "login",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="login" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Signup"
          component={Signup}
          options={{
            tabBarLabel: "signup",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="login" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Maps"
          component={geolocation}
          options={{
            tabBarLabel: "Geolocation",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="map" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;
