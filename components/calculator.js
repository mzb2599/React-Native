import { NativeBaseProvider } from "native-base";
import React, { useState } from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import { CalculatorInput, Calculator } from "react-native-calculator";

const Calc = () => {
  const [inpValue, setInpValue] = useState([]);

  return (
    <View style={{ flex: 1 }}>
      <Calculator style={{ flex: 1 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  roundButton1: {
    width: 350,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    marginBottom: 40,
    padding: 0,
    borderRadius: 30,
    backgroundColor: "#90ee90",
  },
});
export default Calc;
