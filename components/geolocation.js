import * as React from "react";
import MapView, { Marker } from "react-native-maps";
import { Platform, StyleSheet, Text, View, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import GetLocation from "react-native-get-location";
import { useState, useEffect } from "react";
import * as Location from "expo-location";

export default function geolocation() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      var text = "Waiting..";
      if (errorMsg) {
        text = errorMsg;
      } else if (location) {
        text = JSON.stringify(location);
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      {latitude && (
        <MapView
          style={styles.map}
          style={StyleSheet.absoluteFillObject}
          provider={MapView.PROVIDER_GOOGLE}
          showsMyLocationButton={true}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.4,
            longitudeDelta: 0.5,
          }}
        >
          <Marker coordinate={{ latitude: latitude, longitude: longitude }} />
        </MapView>
      )}
      <StatusBar styles="auto"></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
