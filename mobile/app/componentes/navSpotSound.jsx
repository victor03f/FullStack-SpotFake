import { Link } from "expo-router";
import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native"


const style = StyleSheet.create({
    navView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#0C6DED",
        padding: 8
    },
    TextView: {
        color: 'white',
        fontSize: 19,
        justifyContent: 'space-around',

    },
    picture:{
        width: 200,
        height: 200,
        display: 'flex',
        alignSelf: 'center',
        borderRadius: 100,
        marginTop: 20
    }
})
export default navSpotsound = (props) => {

    return (
        <View style={style.navView}>
            <Pressable>
                <Link href={'../perfil'}>
                
            <Image
                style={style.picture}
                source={require('../../assets/images/perfil.jpg')}
            />
            </Link>
            </Pressable>
            <Pressable>
                <Link href={'../home'}>
                    <Text style={style.TextView}>
                        Tudo
                    </Text>
                </Link>
            </Pressable>
            <Pressable>
                <Link href={'../musica'}>
                    <Text style={style.TextView}>
                        Musica
                    </Text>
                </Link>
            </Pressable>
            <Pressable>
                <Link href={'../podcast'}>
                    <Text style={style.TextView}>
                        Podcast
                    </Text>
                </Link>
            </Pressable>



        </View>
    )

}

