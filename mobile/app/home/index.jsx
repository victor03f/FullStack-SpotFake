import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Button, SafeAreaView, TouchableOpacity, ImageBackground, Pressable, TextInput } from "react-native";
import { Link } from "expo-router";
import NavSpotSound from "../componentes/navSpotSound";
import FooterNav from "../componentes/footerNav";


export default Cadastro = () => {
    const [dataArtistas, setdataArtistas] = useState([]);
    const [dataAlbums, setdataAlbums] = useState([]);


    const getArtista = async () => {
        try {
            const response = await fetch(
                'http://localhost:8000/artista',
            );
            const artista = await response.json();
            setdataArtistas(artista)
            return;
        } catch (error) {
            console.error(error);
        }
    };

    const getAlbum = async () => {
        try {
            const response = await fetch(
                'http://localhost:8000/album',
            );
            const album = await response.json();
            setdataAlbums(album)
            return;
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(()=>{
        getArtista()
        getAlbum()
    },[])




    return (
        <View>
            <NavSpotSound />


            <View style={style.footer}>
                <FooterNav />
            </View>
        </View>
    )

}
const style = StyleSheet.create({
    footer: {
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        marginTop: 19,

    },
})