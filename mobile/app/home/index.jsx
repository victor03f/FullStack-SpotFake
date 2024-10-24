import React from "react";
import { useState, useRef } from "react";
import { View, Text, StyleSheet, Image, Button, SafeAreaView, TouchableOpacity, ImageBackground, Pressable, TextInput } from "react-native";
import { Link } from "expo-router";
import NavSpotSound from "../componentes/navSpotSound";
import FooterNav from "../componentes/footerNav";

export default Cadastro = () => {

    return(
        <View>
        <NavSpotSound />
            <Text>
               Home
            </Text>
            <View style ={style.footer}>

            
            <FooterNav />
            </View>
        </View>
    )

}
const style = StyleSheet.create({
footer:{
justifyContent: 's',
alignContent: 'flex-end',
marginTop: 19

},
})