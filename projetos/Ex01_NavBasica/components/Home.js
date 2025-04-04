import React from "react";
import { View, Text, Button, StatusBar } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import style from "./style";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({ navigation }: Props) {
  return (
    <View style={style.container}>
      <StatusBar barStyle="dark-content" />
      <Text>Home Screen</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
}
