import React from "react";
import { View } from "react-native";
import styles from "./styles";
import ListFilter from "./ListFilter";
import ListSort from "./ListSort";

export default function ListControls ({ onFilter, onSort, asc}) {
    return (
        <View style={styles.controls}>
            <ListFilter onFilter={onFilter}/>
            <ListSort onSort={onSort} asc={asc}/>
        </View>
    );
}