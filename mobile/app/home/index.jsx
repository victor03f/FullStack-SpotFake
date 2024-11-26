// import React from "react";
// import { useState, useEffect } from "react";
// import { View, Text, StyleSheet, Image, Button,FlatList, SafeAreaView, SafeAreaProvider, TouchableOpacity, ImageBackground, Pressable, TextInput } from "react-native";
// import { Link } from "expo-router";
// import NavSpotSound from "../componentes/navSpotSound";
// import FooterNav from "../componentes/footerNav";


// export default Home = () => {
//     const [dataArtistas, setdataArtistas] = useState([]);
//     const [dataAlbums, setdataAlbums] = useState([]);


//     const getArtista = async () => {
//         try {
//             const response = await fetch(
//                 'http://localhost:8000/artista',
//             );
//             const artista = await response.json();
//             setdataArtistas(artista)
//             return;
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     const getAlbum = async () => {
//         try {
//             const response = await fetch(
//                 'http://localhost:8000/album',
//             );
//             const album = await response.json();
//             setdataAlbums(album)
//             return;
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     useEffect(() => {
//         getArtista()
//         getAlbum()
//     }, [])

//     console.log(dataArtistas)

//     return (
//         <View>
//             <NavSpotSound />
//                 <SafeAreaView style={style.container}>
//                     <FlatList
//                         data={dataArtistas}
//                         renderItem={({ item }) => <View> {item.nome} </View>}
//                         keyExtractor={item => item.id}
//                     />
//                     <FlatList
//                         data={dataAlbums}
//                         renderItem={({ item }) => <View> {item.title} </View>}
//                         keyExtractor={item => item.id}
//                     />
//                 </SafeAreaView>
//             <View style={style.footer}>
//                 <FooterNav />
//             </View>
//         </View>
//     )

// }
// const style = StyleSheet.create({
//     container:{

//     },
//     footer: {
//         justifyContent: 'flex-end',
//         alignContent: 'flex-end',
//         marginTop: 19,

//     },
// })
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import FooterNav from "../componentes/footerNav"; // Footer customizado, se necessário

export default Home = () => {
    const [dataArtistas, setdataArtistas] = useState([]);
    const [dataAlbums, setdataAlbums] = useState([]);

    const getArtista = async () => {
        try {
            const response = await fetch('http://10.0.2.2:8000/artista');
            const artista = await response.json();
            setdataArtistas(artista);
            return;
        } catch (error) {
            console.error(error);
        }
    };

    const getAlbum = async () => {
        try {
            const response = await fetch('http://10.0.2.2:8000/album');
            const album = await response.json();
            setdataAlbums(album);
            return;
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getArtista();
        getAlbum();
    }, []);

    return (
        <View style={styles.mainContainer}>
            {/* Barra superior com o ícone de perfil */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Spotify</Text>
                <TouchableOpacity>
                    <Link href={'../perfil'}>
                  
                    <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }} style={styles.profileImage} />
                    </Link>
               </TouchableOpacity>
            </View>

            <SafeAreaView style={styles.container}>
                <FlatList
                    data={dataArtistas}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Image source={{ uri: item.image }} style={styles.cardImage} />
                            <Text style={styles.cardTitle}>{item.nome}</Text>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.flatListContainer}
                />
                <FlatList
                    data={dataAlbums}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
                            <Text style={styles.cardTitle}>{item.title}</Text>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.flatListContainer}
                />
            </SafeAreaView>

            {/* Barra de navegação inferior */}
            <View style={styles.footer}>
                <FooterNav />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#121212',  // Cor de fundo do Spotify
    },
    container: {
        flex: 1,
        marginTop: 20,
    },
    header: {
        height: 60,
        backgroundColor: '#1C1C1C',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    headerText: {
        color: '#FFFFFF',
        fontSize: 22,
        fontWeight: 'bold',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        color: 'white'
    },
    flatListContainer: {
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#1E1E1E',
        marginRight: 15,
        borderRadius: 8,
        padding: 10,
        width: 180,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardImage: {
        width: 160,
        height: 160,
        borderRadius: 8,
        marginBottom: 10,
    },
    cardTitle: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    footer: {
        bottom: 0,
        width: '100%',
        backgroundColor: '#1C1C1C',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});
