import React from "react";
import {StyleSheet, Text, View } from "react-native";

export default function Loading(){
    return (
    <View style={styles.container}>
        <Text style={styles.text}>Getting the fucking weather</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end", //가로 축을 기준으로 좌우에 대한 정렬 : 요소들을 컨테이너의 우측으로 정렬
        paddingHorizontal: 30,
        paddingVertical : 100,
        backgroundColor : "#FDF6AA"
    },
    text: {
        color : "#2c2c2c",
        fontSize: 30
    }
});