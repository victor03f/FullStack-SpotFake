import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, Pressable } from 'react-native';
import { Audio } from 'expo-av';
import { Link } from "expo-router";

const Player = () => {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const loadAudio = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require('../image/musicaAudio.mp3'), 
        { shouldPlay: false }
      );
      setSound(sound);
    };
    loadAudio();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const Pausar = async () => {
    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imagem}
        source={require('../image/LogoAnitta.jpg')} />
        
      <Text style={styles.descricao}>Anitta - Vai Malandra</Text>
        
      <Pressable style={styles.butt} onPress={Pausar}>
        <Text style={styles.buttText}>
          {isPlaying ? 'Pausar' : 'Reproduzir'}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',  // Cor de fundo escura, como o Spotify
    justifyContent: 'center',     // Centraliza o conteúdo
    alignItems: 'center',         // Alinha o conteúdo ao centro
  },
  descricao: {
    fontSize: 20,
    color: '#fff',               // Texto claro para contraste com o fundo escuro
    fontFamily: 'Helvetica Neue', // Fonte mais simples, parecida com a do Spotify
    marginTop: 20,
    textAlign: 'center',
  },
  imagem: {
    width: 300,                  // Tamanho grande para a imagem do álbum
    height: 300,
    borderRadius: 10,            // Bordas arredondadas para um visual moderno
    marginBottom: 30,            // Espaçamento entre a imagem e o botão
  },
  butt: {
    marginTop:10,
    backgroundColor: '#1DB954',  // Cor verde característica do Spotify
    borderRadius: 50,            // Bordas arredondadas para o botão
    paddingVertical: 15,         // Padding para aumentar o botão
    paddingHorizontal: 40,
    marginBottom: 50,            // Espaçamento inferior
  },
  buttText: {
    color: '#fff',               // Texto do botão em branco
    fontSize: 18,                // Tamanho de fonte médio
    fontWeight: 'bold',          // Deixa o texto mais destacado
    textAlign: 'center',
  }
});

export default Player;
