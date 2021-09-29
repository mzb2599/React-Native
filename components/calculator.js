import React from "react";
import { View } from "react-native";
import { Calculator } from "react-native-calculator";

const Calc = () => {
  return (
    <View style={{ flex: 1 }}>
      <Calculator style={{ flex: 1 }} />
    </View>
  );
};
export default Calc;
