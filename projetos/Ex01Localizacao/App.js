import React, {useState, useEffect} from "react";

import {Text, View} from "react-native";

import * as Location from "expo-location"

import styles from "./styles";

const API_KEY = "";

const URL = `https://maps.google.com/maps/api/geocode/json?key=${API_KEY}&latlng=`;

export default function WhereAmI(){

  const [address, setAddress] = useState("loading...");

  const [longitude, setLongitude] = useState();

  const [latitude, setlatitude] = useState();

  useEffect(() => {

    function setPosition({
      coords: {latitude, longitude},
    }){
      setLongitude(longitude);

      setlatitude(latitude);

      fetch (`${URL}${latitude},${longitude}`)
        .then((resp) => resp.jason())
        .then(({results}) => {

          if(results.length > 0){
            setAddress(results[0].formatted_address);
          }
        })
        .catch((error) => {

          console.log(error.message);
        });
    }

    let watcher;


    (async () => {

      let {status} = await Location.requestForegroundPermissionAsync();

      if (status !== "granted") {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setPosition(location);

      watcher = await Location.watchPositionAsync(
        {accuracy: Location.LocationAccurary.Highest},
        setPosition
      )
    })();

    return () => {
      watcher?.remove();
    };
  },[]);

  return (
    <View style = {styles.container}>
      <Text style={styles.label}>Address: {address}</Text>
      <Text style={styles.label}>Latitude: {latitude}</Text>
      <Text style={styles.label}>Longitude: {longitude}</Text>
    </View>
  );
}