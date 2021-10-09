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
import axios from "axios";
import { borderRadius } from "styled-system";
import ImagePick from "./addItem";

const SignUp = () => {
  const [firstName, onChangefirstName] = React.useState("");
  const [lastName, onChangelastName] = React.useState("");
  const [phone, onChangephone] = React.useState("");
  const [userName, onChangeuserName] = React.useState("");
  const [location, onChangelocation] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  const getUser = () => {
    axios
      .get("http://192.168.43.148:3000/user/getUsers")
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    // .then(function () {
    //   // always executed
    // });
  };
  const handleLogin = () => {
    //alert("Name: " + firstName + "\nPassword:" + password);
    // axios
    //   .get("/user/getUsers")
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    axios
      .post("http://192.168.43.148:3000/user/addUser", {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        userName: userName,
        location: location,
        password: password,
        items: [],
      })
      .then(function (response) {
        //console.log(response);
        alert("User " + firstName + " " + " created successfully!!");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}> DoneWithIt</Text>
        <Text style={{ marginLeft: 50, fontSize: 15 }}> Just sell it</Text>
      </View>

      <Text style={{ marginLeft: 10 }}>Profile:</Text>
      <ImagePick />

      <Text style={{ marginLeft: 10 }}>firstName:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangefirstName}
        value={firstName}
        placeholder="Eg:Murtuza"
      />

      <Text style={{ marginLeft: 10 }}>LastName:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangelastName}
        value={lastName}
        placeholder="Eg:Bakir"
      />
      <Text style={{ marginLeft: 10 }}>Username:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeuserName}
        value={userName}
        placeholder="mzb"
      />
      <Text style={{ marginLeft: 10 }}>Password:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
      />

      <Text style={{ marginLeft: 10 }}>Mobile :</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangephone}
        value={phone}
        placeholder="+91-987654321"
      />
      <Text style={{ marginLeft: 10 }}>location:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangelocation}
        value={location}
        placeholder="Eg:Mumbai"
      />
      {/* <View style={styles.submit}>
        <Button onPress={onPressLearnMore} title="Login" />
      </View> */}
      <TouchableOpacity onPress={handleLogin} style={styles.roundButton1}>
        <Text>Signup</Text>
      </TouchableOpacity>
      <Text style={{ color: "blue", marginLeft: 200, marginBottom: 50 }}>
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
