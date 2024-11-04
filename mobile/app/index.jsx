
import React from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { Link } from "expo-router";
import { router } from "expo-router";

const Login = () => {
    const [email, onChangeEmail] = React.useState("");
    const [senha, onChangePassword] = React.useState("");
    const fazerlogin = async () => {
        console.log(email)
        if (!email || !senha) {
            alert("Prencha todos os campos corretamente")
        }
        try {
            const resposta = await fetch('http://localhost:8000/autenticacao/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    senha,
                })
            })
        
            console.log(resposta)
            if (resposta.status === 200) {
                
                router.replace('./home')
                console.log(resposta)
                
            }
            else if (resposta.status == 409){
                alert("Email já cadastrado")
                
            }
        } catch(e) {
            console.log(e)
        }


    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>SpotSound</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeEmail}
                    value={email}
                    placeholder="Escreva seu email"
                    placeholderTextColor="#B3B3B3"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangePassword}
                    value={senha}
                    placeholder="Escreva sua senha"
                    placeholderTextColor="#B3B3B3"
                    secureTextEntry
                />
                <Text style={styles.registerText}>
                    Não tem uma conta? Cadastre-se aqui
                </Text>
            </View>

            <Link href={'./cadastro'} style={styles.button}>
                <Text style={styles.buttonText}>Cadastro</Text>
            </Link>
            <Link href={'./biblioteca'} style={styles.button}>
                <Text style={styles.buttonText}>Biblioteca</Text>
            </Link>
            <Link href={'./home'} style={styles.button}>
                <Text style={styles.buttonText}>Home</Text>
            </Link>
            <Link href={'./musica'} style={styles.button}>
                <Text style={styles.buttonText}>Música</Text>
            </Link>
            <Link href={'./podcast'} style={styles.button}>
                <Text style={styles.buttonText}>Podcast</Text>
            </Link>
            <Link href={'./busca'} style={styles.button}>
                <Text style={styles.buttonText}>Busca</Text>
            </Link>
            <Link href={'./perfil'} style={styles.button}>
                <Text style={styles.buttonText}>perfil</Text>
            </Link>
            <Pressable style={styles.button} onPress={fazerlogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 40,
        color: '#1DB954',
        marginBottom: 40,
        fontWeight: 'bold',
    },
    inputContainer: {
        width: '100%',
    },
    input: {
        borderColor: '#B3B3B3',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop: 15,
        backgroundColor: '#282828',
        color: '#FFFFFF',
    },
    registerText: {
        color: '#B3B3B3',
        textAlign: 'center',
        marginVertical: 15,
    },
    button: {
        backgroundColor: '#1DB954',
        borderRadius: 50,
        paddingVertical: 12,
        paddingHorizontal: 30,
        marginTop: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default Login;
