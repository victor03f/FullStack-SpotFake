// import React from "react";
// import { useState, useRef } from "react";
// import { View, Text, StyleSheet, Image, Button, SafeAreaView, TouchableOpacity, ImageBackground, Pressable, TextInput } from "react-native";
// import { Link, router } from "expo-router";


// export default Cadastro = () => {


//     const [nome, onChangeNome] = React.useState("");
//     const [email, onChangeEmail] = React.useState("");
//     const [senha, onChangesenha] = React.useState("");
//     const [sobrenome, onChangesobrenome] = React.useState("");
//     const [telefone, onChangeTelefone] = React.useState("");

//     const enviarCadastro = async () => {
//         console.log(nome)
//         if (!nome || !senha || !email || !sobrenome || !telefone) {
//             alert("Prencha todos os campos corretamente")
//         }
//         try {
//             const resposta = await fetch('http://localhost:8000/registro', {
//                 method: 'POST',
//                 headers: {
//                     Accept: 'application/json',
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     nome,
//                     sobrenome,
//                     email,
//                     senha,
//                     telefone,
//                 })
//             })
//         } catch(e) {
//             console.log(e)
//         }

//         console.log(resposta)
//         if (resposta.status === 200) {
//             alert("user criado com sucesso")
//             router.replace('../home')
//             console.log(resposta)
            
//         }
//         else if (resposta.status == 409){
//             alert("Email já cadastrado")
            
//         }
//     }



//     return (
//         <View style={style.ViewCadastro}>

//             <Text style={style.Title}>Preencha seus dados</Text>

//             <View style={style.inputCadastro}>


//                 <TextInput
//                     style={style.input}
//                     onChangeText={(text) => onChangeNome(text)}
//                     value={nome}
//                     placeholder="Escreva seu nome"
//                 />
//                 <TextInput
//                     style={style.input}
//                     onChangeText={(text) => onChangesobrenome(text)}
//                     value={sobrenome}
//                     placeholder="Escreva seu sobrenome"
//                 />
//                 <TextInput
//                     style={style.input}
//                     onChangeText={(text) => onChangeEmail(text)}
//                     value={email}
//                     placeholder="Escreva seu email"
//                 />
//                 <TextInput
//                     style={style.input}
//                     onChangeText={(text) => onChangesenha(text)}
//                     value={senha}
//                     placeholder="Escreva sua senha"
//                 />

//                 <TextInput
//                     style={style.input}
//                     onChangeText={(text) => onChangeTelefone(text)}
//                     value={telefone}
//                     placeholder="Escreva Seu telefone"
//                 />

//             </View>
//             <Pressable style={style.button} onPress={enviarCadastro}>
//                             <Text style={style.textButton}>Enviar registo</Text>
//                         </Pressable>
//         </View>
//     )
// }

// const style = StyleSheet.create({
//     input: {
//         borderColor: "gray",
//         borderWidth: 1,
//         borderRadius: 10,
//         padding: 10,
//         marginTop: 15
//     },
//     Title: {
//         fontSize: 27,
//         marginBottom: 30,
//     },
//     ViewCadastro: {
//         flex: 0.9,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     botao: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#0C6DED',
//         borderRadius: 100,
//         padding: 5,
//         marginTop: 5
//     }
// })
import React from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { router } from "expo-router";

const Cadastro = () => {
    const [nome, onChangeNome] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
    const [senha, onChangeSenha] = React.useState("");
    const [sobrenome, onChangeSobrenome] = React.useState("");
    const [telefone, onChangeTelefone] = React.useState("");

    const enviarCadastro = async () => {
        console.log(nome);
        if (!nome || !senha || !email || !sobrenome || !telefone) {
            alert("Preencha todos os campos corretamente");
            return;
        }
        try {
            const resposta = await fetch('http://localhost:8000/autenticacao/registro', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome,
                    sobrenome,
                    email,
                    senha,
                    telefone,
                }),
            });
    
            // Verificar se a resposta é um sucesso (200 OK)
            if (!resposta.ok) {
                // Pode ser tratado mais genericamente, como resposta.status >= 400
                if (resposta.status === 409) {
                    alert("Email já cadastrado");
                } else {
                    alert("Erro ao criar o usuário");
                }
            } else {
                alert("Usuário criado com sucesso!");
                router.replace('../');
            }
        } catch (e) {
            console.log(e);
            alert("Erro na comunicação com o servidor.");
        }
    };
    

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Preencha seus dados</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNome}
                    value={nome}
                    placeholder="Escreva seu nome"
                    placeholderTextColor="#B3B3B3"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeSobrenome}
                    value={sobrenome}
                    placeholder="Escreva seu sobrenome"
                    placeholderTextColor="#B3B3B3"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeEmail}
                    value={email}
                    placeholder="Escreva seu email"
                    placeholderTextColor="#B3B3B3"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeSenha}
                    value={senha}
                    placeholder="Escreva sua senha"
                    placeholderTextColor="#B3B3B3"
                    secureTextEntry
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeTelefone}
                    value={telefone}
                    placeholder="Escreva seu telefone"
                    placeholderTextColor="#B3B3B3"
                />
            </View>
            <Pressable style={styles.button} onPress={enviarCadastro}>
                <Text style={styles.buttonText}>Enviar Registro</Text>
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
        fontSize: 27,
        color: '#FFFFFF',
        marginBottom: 30,
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
    button: {
        backgroundColor: '#1DB954',
        borderRadius: 50,
        paddingVertical: 12,
        paddingHorizontal: 30,
        marginTop: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default Cadastro;
