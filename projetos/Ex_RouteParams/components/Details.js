import React from "react";
import style from "./style";
import { View, Text, Button, StatusBar } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList>;

export default function({ route }: Props) {
    const { title } = route.params;

    return(
        <View style={style.container}>
            <StatusBar barStyle="dark-content"/>
            <Text>{title}</Text>
        </View>
    )
}