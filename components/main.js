import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import { Avatar } from "react-native-elements";

//import UserAvatar from "react-native-user-avatar";

import image from "../assets/logo-red.png";
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Oppo A12",
    Price: 12000,
    source: require("../assets/mobile.jpg"),
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Hp Alienware M15 R6",
    Price: 84000,
    source: require("../assets/laptop.jpg"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Honda Amaze",
    Price: 400000,
    source: require("../assets/car.jpg"),
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bb",
    title: "Peter England",
    Price: 4800,
    source: require("../assets/shirt.jpg"),
  },
];

const Item = ({ title, Price, imgSource }) => (
  <View style={styles.item}>
    {/* <Avatar
      size="large"
      icon={{ name: "rocket", color: "orange", type: "font-awesome" }}
      overlayContainerStyle={{ backgroundColor: "white" }}
      onPress={() => console.log("Works!")}
      activeOpacity={0.7}
      containerStyle={{ flex: 4, marginTop: 20, marginLeft: 100 }}
    /> */}
    <Avatar rounded source={imgSource} size={200} marginLeft={60} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.cost}>{`Rs. ${Price}/-`}</Text>
  </View>
);

const Main = () => {
  // getting items from Database

  const getItems = () => {
    axios
      .get("http://192.168.43.108:3000/item/getItems")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const renderItem = ({ item }) => (
    <Item title={item.title} Price={item.Price} imgSource={item.source} />
  );

  const setItems = () => {
    axios
      .post("http://192.168.43.108:3000/item/addItems", {
        userId: "userId",
        name: "Item name",
        category: "category",
        price: "1024",
        condition: "average",
        purchasedOn: "01 September 2021",
        image: "image",
        numberOfUsers: "2",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const renderItem = ({ item }) => (
    <Item title={item.title} Price={item.Price} imgSource={item.source} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity onPress={getItems} style={styles.roundButton1}>
        <Text>Signup</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#c9e9ec",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
    marginLeft: 80,
  },
  cost: {
    fontSize: 14,
    marginLeft: 110,
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

export default Main;
