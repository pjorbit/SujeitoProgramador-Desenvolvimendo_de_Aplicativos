import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react';
import firebase from '../../services/firebaseConection';

export default function Login({ changeStatus }) {

  const [type, setType] = useState('Login')
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleLogin() {
    if(type === 'Login') {
      //login
      const user = firebase.auth().signInWithEmailAndPassword(email, senha)
      .then((user)=>{
        changeStatus(user.user.uid)
      })
      .catch((error)=>{
        console.log(error)
        Alert.alert('Deu errado')
        return;
      })
    } else {
      //cadastro
      const user = firebase.auth().createUserWithEmailAndPassword(email, senha)
      .then((user)=>{
        changeStatus(user.user.uid)
      })
      .catch((error)=>{
        console.log(error)
        Alert.alert('Cadastro deu errado')
        return;
      })
    }
  }

  return (
    <SafeAreaView style={style.container}>

      <TextInput
      placeholder='Seu email..'
      value={email}
      onChangeText={(texto)=>setEmail(texto)}
      style={style.input}
      />

      <TextInput
      placeholder='*******'
      value={senha}
      onChangeText={(texto)=>setSenha(texto)}
      style={style.input}
      />

      <TouchableOpacity
      style={[style.btnArea, {backgroundColor: type === 'Login' ? '#33a6f2' : '#595959'}]}
      onPress={handleLogin}
      >
        <Text style={{color: '#fff', fontSize: 15}}>
          {type === 'Login' ? 'Entrar' : 'Cadastrar'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>setType(type => type === 'Login' ? 'Cadastrar' : 'Login')}>
        <Text style={style.btnTexto}>
          {type === 'Login' ? 'Criar uma conta' : 'Já possuo uma conta'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 10,
        backgroundColor: '#f2f6fc',
        alignItems: 'center'
    },
    input:{
        borderWidth: 1,
        borderColor: '#595959',
        backgroundColor: '#fff',
        padding: 10,
        marginBottom:10,
        height: 40,
        borderRadius: 4,
        width: '100%'
    },
    btnArea:{
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        width: '50%',
        elevation: 5,
        marginBottom: 30 
    },
    btnTexto:{
        fontWeight: 'bold',
        fontSize: 15,
        color: '#252525'
    }
})