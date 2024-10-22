import { Link } from "expo-router";
import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, } from "react-native"


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
})
export default navSpotsound = (props) => {

    return (
        <View style={style.navView}>

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

