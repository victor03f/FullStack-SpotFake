import React from "react";
import { useState, useRef } from "react";
import { View, Text, StyleSheet, Image, Button, SafeAreaView, TouchableOpacity, ImageBackground, Pressable, TextInput } from "react-native";
import { Link } from "expo-router";


export default login = () => {



    const [email, onChangeEmail] = React.useState();
    const [password, onChangePassword] = React.useState();
    





    return (
        <View style={style.ViewCadastro}>

            <Text style={style.Title}>SpotSound</Text>

            <View style={style.inputCadastro}>


              

                <TextInput
                    style={style.input}
                    onChangeEmail={onChangeEmail}
                    value={email}
                    placeholder="Escreva seu email"
                />
                <TextInput
                    style={style.input}
                    onChangePassword={onChangePassword}
                    value={password}
                    placeholder="Escreva sua senha"
                />
              <Text style={style.textCadastro}>
                Não tem uma conta? Cadastre-se aqui
              </Text>
                
            </View>
            <Link href={'./cadastro'} style = {style.botao}>
                <Text> Cadastro</Text>
            </Link>
            <Link href={'./biblioteca'} style = {style.botao}>
                <Text> Biblioteca</Text>
            </Link>
            <Link href={'./home'} style = {style.botao}>
                <Text> home</Text>
            </Link>
            <Link href={'./musica'} style = {style.botao}>
                <Text> musica</Text>
            </Link>
            <Link href={'./podcast'} style = {style.botao}>
                <Text> podcast</Text>
            </Link>
            <Link href={'./busca'} style = {style.botao}>
                <Text> busca</Text>
            </Link>
        </View>
    )
}

const style = StyleSheet.create({
    input: {
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop: 15,
        marginBottom: 20,
    },
    Title: {
        fontSize: 27,
        marginBottom: 30,
    },
    ViewCadastro: {
        flex: 0.9,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botao:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0C6DED',
        borderRadius: 100,
        padding: 5,
        marginTop: 5,
    },
    textCadastro:{
        marginBottom: 10
    }

})