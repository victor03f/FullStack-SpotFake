

import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Image, ScrollView, Modal, TouchableOpacity, TextInput } from "react-native";
import { Link } from "expo-router";
import { AppContext } from "../../scripts/AppContext";
import * as ImagePicker from 'expo-image-picker';

const Perfil = () => {
    const { userInfo, setUserInfo } = useContext(AppContext);
    const [image, setImage] = useState('');
    const [novaImagem, setNovaImagem] = useState(false);

    useEffect(() => {
        if (userInfo.profile_image) {
            setImage(userInfo.profile_image)
        }
    }, [userInfo]);

    const enviar = async () => {
        try {
            const data = {
                "file": image,
                "upload_preset": 'ml_default',
            };
            const res = await fetch('https://api.cloudinary.com/v1_1/dzcyvhf6h/upload', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await res.json();
            setImage(result.url);
            setUserInfo({ ...userInfo, profile_image: result.url });
            await enviarBD(result);
        } catch (e) {
            console.log(e);
        }
    };

    const enviarBD = async (result) => {
        const response = await fetch(`http://10.0.2.2:8000/user/trocar-img/${userInfo.id}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: result.url })
        });
        if (response.status === 200) {
            await response.json();
            alert('Imagem atualizada com sucesso');
            return;
        }
        alert('Houve um erro ao atualizar a imagem');
    };

    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Precisamos da permissão para acessar a galeria!');
            return;
        }
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri);
            setNovaImagem(true);
        }
    };

    return (
        <ScrollView style={style.container}>
            <View style={style.body}>
                <Link href={'/home'}>
                    <Image source= {require('../image/voltar.png')} style={style.arrowBack}/>
                </Link>
                <TouchableOpacity style = {style.viewfoto} onPress={pickImage}>
                  
                    <Image source={{ uri: image }} style={style.img} />
                    {novaImagem && (
                        <Pressable onPress={enviar} style={style.butt}>
                            <Text style={style.descricao}>Salvar</Text>
                        </Pressable>
                    )}
                </TouchableOpacity>
              
                <Text style={style.nome}>{userInfo.nome}</Text>
                <Text style={style.descricao}>{userInfo.sobrenome}</Text>
                <Text style={style.descricao}>{userInfo.dataNascimento}</Text>
                <Text style={style.descricao}>{userInfo.email}</Text>
                <Text style={style.descricao}>{userInfo.status}</Text>
            </View>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    body: {
        alignItems: 'center',
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    img: {
        width: 140,
        height: 140,
        borderRadius: 70,
        borderWidth: 2,
        borderColor: '#1DB954',
        marginBottom: 20,
    },
    butt: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#1DB954',
        borderRadius: 25,
    },
    descricao: {
        fontSize: 16,
        color: '#B3B3B3',
        textAlign: 'center',
        marginVertical: 4,
    },
    nome: {
        fontSize: 30,
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginTop: 10,
    },
    input: {
        height: 50,
        borderColor: '#B3B3B3',
        borderWidth: 1,
        borderRadius: 25,
        paddingLeft: 20,
        marginTop: 20,
        width: '100%',
        color: '#FFFFFF',
    },
    arrowBack:{
        width: 140,
        height: 140,
       
    },
    
});

export default Perfil;
