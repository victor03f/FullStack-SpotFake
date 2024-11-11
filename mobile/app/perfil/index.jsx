import React, { useState, useEffect } from 'react';
import { View, Text, Image, Pressable, StyleSheet, SafeAreaView, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';

const Perfil = () => {
    const [user, setUser] = useState({
        username: 'Nome do Usuário',
        email: 'usuario@email.com',
        createdAt: '2023-01-01',
        profileImage: null, // URL da imagem de perfil ou `null` para imagem padrão
    });

    const pickImage = async () => {
        // Solicita permissão para acessar a galeria
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permissionResult.granted) {
            Alert.alert('Permissão Necessária', 'Permita o acesso à galeria para selecionar uma foto.');
            return;
        }

        // Abre a galeria para o usuário selecionar uma imagem
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setUser(prevState => ({ ...prevState, profileImage: result.assets[0].uri }));
            // Aqui você pode implementar o upload da imagem ao backend se necessário
        }
    };

    useEffect(() => {
        // Carregar informações do usuário de uma API
        const fetchUserData = async () => {
            try {
                const res = await axios.get('http://10.0.2.2:8000/v1/user/1'); // URL de exemplo
                const userData = res.data.data;
                userData.createdAt = userData.createdAt.split('T')[0];
                setUser(userData);
            } catch (error) {
                console.error('Erro ao buscar dados do usuário:', error);
            }
        };

        fetchUserData();
    }, []);

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
                
                <Text style={styles.username}>{user.username}</Text>
                <Text style={styles.email}>{user.email}</Text>
                <Text style={styles.joinDate}>Membro desde {user.createdAt}</Text>

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
    email: {
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

export default Perfil;
