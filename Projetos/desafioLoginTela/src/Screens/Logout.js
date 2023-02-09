import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native'
import firebase from '../Firebase/FirebaseConnection';

const backGround = require('../assets/281564.jpg')

export default function Logout() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const navigation = useNavigation();

    //confirmar senha
    function confirmarSenha() {
        if(password === passwordConfirm) {
            cadastrar();
            return;
        } else {
            Alert.alert('Suas senhas estão incorretas!');
            setPasswordConfirm('');
        }
    }

    //cadastro
     async function cadastrar() {
       await firebase.auth().createUserWithEmailAndPassword(email, password)
       .then((value)=>{
         Alert.alert('Usuário criado: '+ value.user.email)
       })
       .catch((error)=>{
         if(error.code === 'auth/weak-password') {
            Alert.alert('Sua senha deve ter mais de 6 caracteres')
           return
         }
         if(error.code === 'auth/invalid-email') {
            Alert.alert('Email inválido')
           return
         } else {
            Alert.alert('Ops :( ocorreu um problema')
         }
       })
       setEmail('');
       setPassword('');
       setPasswordConfirm('');
    }

    return (
        <View style={styles.container}>
            <ImageBackground
            source={backGround}
            style={styles.backGround}
            >
                <View style={styles.viewInfos}>

                    <Text style={styles.infoTitulo}>Preencha as informações</Text>
                    <TextInput
                    placeholder='Email..'
                    underlineColorAndroid='transparent'
                    onChangeText={(texto)=>setEmail(texto)}
                    style={styles.input}
                    value={email}
                    />
                    <TextInput
                    placeholder='Senha..'
                    underlineColorAndroid='transparent'
                    onChangeText={(texto)=>setPassword(texto)}
                    style={styles.input}
                    value={password}
                    />
                    <TextInput
                    placeholder='Confirmar senha..'
                    onChangeText={(texto)=>setPasswordConfirm(texto)}
                    style={styles.input}
                    value={passwordConfirm}
                    />

                    <TouchableOpacity 
                    style={styles.btnCriarConta}
                    onPress={confirmarSenha}
                    >
                        <Text style={styles.btnCriarContaText}>Criar conta</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.containerBranco}>

                    <TouchableOpacity
                    style={styles.btnArea}
                    onPress={()=> navigation.goBack()}
                    >
                        <Text style={styles.btnText}>Voltar</Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    backGround:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    containerBranco:{
        backgroundColor: '#f5f5f5',
        height: 150,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnArea:{
        height: 45,
        width: 250,
        elevation: 5,
        backgroundColor: '#f5f5f5',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#292929'
    },
    input:{
        height: 45,
        width: 250,
        backgroundColor: '#f9f9f9',
        borderRadius: 20,
        marginBottom: 25,
        color: '#292929',
        paddingLeft: 15
    },
    viewInfos:{
        flex: 1,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
    },
    infoTitulo:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#292929',
        marginBottom: 25
    },
    btnCriarConta:{
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#f1f1f1',
        height: 45,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnCriarContaText:{
        fontSize: 18,
        color: '#f9f9f9'
    }
})