import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { borderRadius } from "styled-system";

const SignUp = () => {
  const [name, onChangeName] = React.useState("");
  const [Username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [mobile, onChangeMobile] = React.useState("");

  const handleLogin = () => {
    alert("Name: " + text + "\nPassword:" + number);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{ fontSize: 30, fontWeight: "bold"}}> DoneWithIt</Text>
        <Text style={{ marginLeft: 50, fontSize: 15 }}> Just sell it</Text>
      </View>
      <Text style={{ marginLeft: 10 }}>Name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="abc@example.com"
      />
      <Text style={{ marginLeft: 10 }}>Username:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeUsername}
        value={Username}
        placeholder="abc@example.com"
      />
      <Text style={{ marginLeft: 10 }}>Password:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Password"
      />
      <Text style={{ marginLeft: 10 }}>Confirm Password:</Text>
      <TextInput style={styles.input1} placeholder="Retype-Password" />
      <Text style={{ marginLeft: 10 }}>Mobile :</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeMobile}
        value={mobile}
        placeholder="+91-987654321"
      />
      {/* <View style={styles.submit}>
        <Button onPress={onPressLearnMore} title="Login" />
      </View> */}
      <TouchableOpacity onPress={handleLogin} style={styles.roundButton1}>
        <Text>Signup</Text>
      </TouchableOpacity>
      <Text style={{ color: "blue", marginLeft: 200,marginBottom:50 }}>
        Already a user? Login
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    marginLeft: 100,
    marginTop: 20,
    marginBottom: 50,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    marginBottom: 30,
    borderRadius: 15,
  },
  input1: {
    height: 50,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius: 15,
  },
  submit: {
    marginLeft: 40,
    marginRight: 40,
    padding: 10,
    //borderRadius: 150,
  },
  roundButton1: {
    width: 350,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    padding: 5,
    borderRadius: 30,
    backgroundColor: "orange",
  },
});

export default SignUp;
