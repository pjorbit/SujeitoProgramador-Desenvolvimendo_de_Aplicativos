import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native'
import React, { useState } from 'react';
import firebase from './src/firebaseConection';

export default function App() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');

  async function cadastrar() {
    await firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then((value)=>{
      firebase.database().ref('Usuarios').child(value.user.uid).set({
        Nome: nome
      })
      Alert.alert(`Cadastro com sucesso`, `Usuário ${value.user.uid} cadastrado com sucesso`)
    })
    .catch((error)=>{
      Alert.alert('Deu tudo errado :(')
    })
    setEmail('');
    setSenha('');
    setNome('');
  }

  return (
    <View style={style.container}>
      <Text style={style.titulo}>Nome: </Text>
      <TextInput
      value={nome}
      onChangeText={(texto)=>setNome(texto)}
      style={style.input}
      />

      <Text style={style.titulo}>Email: </Text>
      <TextInput
      value={email}
      onChangeText={(texto)=>setEmail(texto)}
      style={style.input}
      />

      <Text style={style.titulo}>Senha: </Text>
      <TextInput
      value={senha}
      onChangeText={(texto)=>setSenha(texto)}
      style={style.input}
      />

      <Button
      title='Cadastrar'
      onPress={cadastrar}
      />

      
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex: 1,
  },
  titulo:{
    fontSize: 18,
    color: '#292929'
  },
  input:{
    padding: 7,
    margin: 10,
    borderWidth: 2,
    borderColor: '#292929',
    fontSize: 18
  }
})