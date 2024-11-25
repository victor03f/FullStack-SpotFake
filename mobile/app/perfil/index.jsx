import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, Pressable, StyleSheet, SafeAreaView, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons';
import { AppContext } from '../../scripts/AppContext.js';
import axios from 'axios';

export default Perfil = () => {
    const [newImage, setNewImage] = useState(false);
    const { userInfo, setUserInfo } = useContext(AppContext)

    const handleSendimage = async () => {
        try {
            const data = {
                "file": user.profileImage,
                "upload_preset": 'ml_default',
                "name": "teste",
            }
            const res = await fetch('https://api.cloudinary.com/v1_1/dzcyvhf6h/upload', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const result = await res.json();
            console.log(result.url);
            enviarImgParaBackend(result.url)

        }

        catch (e) {
            console.log(e)
        }
    }

    const enviarImgParaBackend = async (url) => {
        try {
            const resposta = await fetch('http://localhost:8000/profile/1', { //trocar a rota depois
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    url: url
                })
            })

            console.log(resposta)
            if (resposta.status === 200) {

                console.log(resposta)

            }
            else if (resposta.status == 409) {
                alert("Email já cadastrado")

            }
        } catch (e) {
            console.log(e)
        }
    }

    const [user, setUser] = useState({
        username: 'Nome do Usuário',
        email: 'usuario@email.com',
        createdAt: '2023-01-01',
        profileImage: null,
    });

    const pickImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permissionResult.granted) {
            Alert.alert('Permissão Necessária', 'Permita o acesso à galeria para selecionar uma foto.');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setUser(prevState => ({ ...prevState, profileImage: result.assets[0].uri }));
            setNewImage(true)
        }
    };

 

       
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Pressable style={styles.imageContainer} onPress={pickImage}>
                    {user.profileImage ? (
                        <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
                    ) : (
                        <FontAwesome name="user-circle" size={120} color="#535353" />
                    )}
                    <Text style={styles.changePhotoText}>Alterar Foto</Text>
                </Pressable>

                {newImage && <Pressable onPress={handleSendimage} style={styles.editButton}>
                    <Text style={styles.editButtonText}>Salvar foto</Text></Pressable>}

                <Text style={styles.username}>{userInfo.nome}</Text>
                <Text style={styles.emailuser}>{userInfo.email}</Text>

                <Pressable style={styles.editButton}>
                    <Text style={styles.editButtonText}>Editar Perfil</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#121212',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 40,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    changePhotoText: {
        color: '#1DB954', // Verde do Spotify
        fontSize: 14,
        marginTop: 8,
    },
    username: {
        fontSize: 24,
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginTop: 20,
    },
    emailuser: {
        fontSize: 16,
        color: '#B3B3B3',
        marginTop: 4,
    },
    joinDate: {
        fontSize: 14,
        color: '#B3B3B3',
        marginTop: 8,
    },
    editButton: {
        marginTop: 30,
        backgroundColor: '#1DB954',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
    },
    editButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});


