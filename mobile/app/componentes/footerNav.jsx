import { Link } from "expo-router";
import React from "react";
import { View, Image, StyleSheet, Pressable } from "react-native";

const style = StyleSheet.create({
  navView: {
    width: '100%', // Garantir que a navbar ocupe toda a largura
    flexDirection: 'row', // Alinhamento dos itens na horizontal
    justifyContent: 'space-between', // Distribui os ícones entre as extremidades
    alignItems: 'center', // Alinha os ícones no centro verticalmente
    position: 'relative', // Necessário para o centro
    padding: 30, // Adiciona espaçamento
  },
  tinyLogo: {
    width: 70, // Tamanho aumentado para 80
    height: 70, // Tamanho aumentado para 80
  },
  icons: {
    flexDirection: 'row', // Organiza os ícones na horizontal
    width: '100%', // Faz com que os ícones ocupem toda a largura disponível
    justifyContent: 'space-between', // Espaça os ícones igualmente
    position: 'absolute', // Permite o posicionamento flexível
    left: 0,
    right: 0,
    top: '50%', // Ajusta o alinhamento vertical para o meio
    transform: [{ translateY: -40 }], // Ajusta o deslocamento para manter os ícones no centro
  }
});

export default function FooterNav(props) {
  return (
    <View style={style.navView}>
      <View style={style.icons}>
        {/* Ícone Home */}
        <Pressable>
          <Link href={'../home'}>
            <Image
              style={style.tinyLogo}
              source={require('../image/home2.png')}
            />
          </Link>
        </Pressable>

        {/* Ícone Biblioteca */}
        <Pressable>
          <Link href={'../biblioteca'}>
            <Image
              style={style.tinyLogo}
              source={require('../image/biblioteca2.png')}
            />
          </Link>
        </Pressable>

        {/* Ícone Música */}
        <Pressable>
          <Link href={'../musica'}>
            <Image
              style={style.tinyLogo}
              source={require('../image/musica2.png')}
            />
          </Link>
        </Pressable>
      </View>
    </View>
  );
}
