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
import SaveImage from "react-native-save-image";

import image from "../assets/logo-red.png";

const ShareExample = (image) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
};

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

// const handlePress = (image) => {
//   SaveImage.setAlbumName("Donewithit downloads");
//   SaveImage.downloadImage(image);
// };
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
    <Avatar
      rounded
      source={imgSource}
      size={200}
      marginLeft={60}
      //onPress={share(imgSource)}
    />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.cost}>{`Rs. ${Price}/-`}</Text>
  </View>
);

const Main = () => {
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
});

export default Main;
