import React from "react";
import style from "./style";
import { View, Text, Button, StatusBar } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Settings({ navigation }: Props){
    return (
        <View style={style.container}>
            <StatusBar barStyle="dark-content"/>
            <Text>Settings Screen</Text>
            <Button title="Home" onPress={() => navigation.navigate("Home")} />
        </View>
    );
}