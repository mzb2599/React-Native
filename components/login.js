import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { borderRadius } from "styled-system";
import axios from "axios";

const Login = () => {
  const [userName, onChangeUserName] = React.useState("");
  const [password, onChangepassword] = React.useState(null);
  const handleLogin = () => {
    //alert("Name: " + text + "\nPassword:" + number);

    axios
      .get(`http://192.168.43.148:3000/user/getUsers`)
      .then(function (response) {
        // handle success
        //console.log(response.data);
        response.data.forEach((element) => {
          // console.log(element.firstName);
          // console.log("________________");
          // console.log(element.password);
          // console.log("________________");
          // console.log("________________");'
          //let c = 0;
          //let flag = 0;
          //console.log(element.userName, element.password);
          if (element.userName == userName && element.password == password) {
            alert("User signed in successfully");
          }
          // c += 1;
          // if (flag == 1) {
          //   alert("Invalid username or password");
          //   flag = 0;
          // }
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    // .then(function () {
    //   // always executed
    // });
  };
  return (
    <SafeAreaView style={styles.loginpg}>
      <View style={styles.container}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}> DoneWithIt</Text>
        <Text style={{ marginLeft: 50, fontSize: 15 }}> Just sell it</Text>
      </View>
      <Text style={{ marginLeft: 10 }}>Name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeUserName}
        value={userName}
        placeholder="Username"
      />
      <Text style={{ marginLeft: 10 }}>Password:</Text>
      <TextInput
        style={styles.input1}
        onChangeText={onChangepassword}
        value={password}
        placeholder="Password"
      />
      <Text style={{ color: "blue", marginLeft: 230, marginBottom: 30 }}>
        Forgot Password
      </Text>
      {/* <View style={styles.submit}>
        <Button onPress={onPressLearnMore} title="Login" />
      </View> */}
      <TouchableOpacity onPress={handleLogin} style={styles.roundButton1}>
        <Text>Login</Text>
      </TouchableOpacity>
      <Text style={{ color: "blue", marginLeft: 215 }}>New user? SignUp</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    marginLeft: 100,
    marginTop: 20,
    marginBottom: 20,
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

export default Login;
