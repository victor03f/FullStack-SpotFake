import React from "react";
import { useState, useRef } from "react";
import { View, Text, StyleSheet, Image, Button, SafeAreaView, TouchableOpacity, ImageBackground, Pressable, TextInput } from "react-native";
import { Link } from "expo-router";


export default Cadastro = () => {


    const [nome, onChangeNome] = React.useState();
    const [email, onChangeEmail] = React.useState();
    const [password, onChangePassword] = React.useState();
    const [CPF, onChangeCPF] = React.useState();
    const [telefone, onChangeTelefone] = React.useState();





    return (
        <View style={style.ViewCadastro}>

            <Text style={style.Title}>Preencha seus dados</Text>

            <View style={style.inputCadastro}>


                <TextInput
                    style={style.input}
                    onChangeNome={onChangeNome}
                    value={nome}
                    placeholder="Escreva Seu nome"
                />

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
                <TextInput
                    style={style.input}
                    onChangeCPF={onChangeCPF}
                    value={CPF}
                    placeholder="Escreva seu CPF(Apenas Numeros)"
                />
                <TextInput
                    style={style.input}
                    onChangeTelefone={onChangeTelefone}
                    value={telefone}
                    placeholder="Escreva Seu telefone"
                />
                
            </View>
            <Link href={'../home'} style = {style.botao}>
                <Text> Enviar</Text>
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
        marginTop: 15
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
        marginTop: 5
    }
})