import { Link } from "expo-router";
import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, } from "react-native"


const style = StyleSheet.create({
    navView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#0C6DED",
        padding: 8,
        alignItems: 'flex-end'
    },
    TextView: {
        color: 'white',
        fontSize: 19,
        justifyContent: 'space-around',

    },
})
export default footerNav = (props) => {

    return (
        <View>
              <Image
        style={style.tinyLogo}
        source={{
          uri: props
        }}
      />
      <Text>Mix de {props.text}</Text>
        </View>
    )
}