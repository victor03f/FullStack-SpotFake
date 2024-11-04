import React, { useState } from "react";
import { View,StyleSheet,Image,SafeAreaView } from "react-native"
import { Link } from "expo-router"
import NavSpotSound from "../componentes/navSpotSound";

const style = StyleSheet.create({
    picture:{
        width: 200,
        height: 200,
        display: 'flex',
        alignSelf: 'center',
        borderRadius: 100,
        marginTop: 20
    }
    }
  
)

export default Sobremim = () => {
    return (
        <SafeAreaView>
          <NavSpotSound />
            <View>
                <Image
                    style={style.picture}
                    source={require('../../assets/images/perfil.jpg')}
                />
            </View>
            <View style={style.ViewDescription}>
              
            </View>
        </SafeAreaView>
    )
}