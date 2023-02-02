import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, ActivityIndicator} from 'react-native';
import firebase from './src/FirebaseConection';

const App = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  //cadastro
  // async function cadastrar() {
  //   await firebase.auth().createUserWithEmailAndPassword(email, password)
  //   .then((value)=>{
  //     alert('Usuário criado: '+ value.user.email)
  //   })
  //   .catch((error)=>{
  //     if(error.code === 'auth/weak-password') {
  //       alert('Sua senha deve ter mais de 6 caracteres')
  //       return
  //     }
  //     if(error.code === 'auth/invalid-email') {
  //       alert('Email inválido')
  //       return
  //     } else {
  //       alert('Ops :( ocorreu um problema')
  //     }
  //   })
  //   setEmail('');
  //   setPassword('')
  // }

  //login
  async function entrar() {
    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then((value)=>{
      alert('Usuario logado: ' + value.user.email);
      setUser(value.user.email)
    })
    .catch((error)=>{
      alert('Vish :( algo deu errado')
    })
    setEmail('');
    setPassword('');
  }

  async function sair() {
    await firebase.auth().signOut();
    alert('Usuário deslogado com sucesso')
    setUser('')
  }

  return (
    <View style={styles.container}>

      {/* <Text style={{textAlign: 'center', fontSize: 25, marginTop: 15}}>Cadastrar Usuário</Text>
      <Text style={styles.titulo}>Email: </Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid='transparent'
      onChangeText={(texto) => setEmail(texto)}
      value={email}
      />
      <Text style={styles.titulo}>Password: </Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid='transparent'
      onChangeText={(texto) => setPassword(texto)}
      value={password}
      />
      <Button
      title='Cadastrar'
      onPress={cadastrar}
      /> */}

      <Text style={{textAlign: 'center', fontSize: 25, marginTop: 15}}>Entrar</Text>
      <Text style={styles.titulo}>Email: </Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid='transparent'
      onChangeText={(texto) => setEmail(texto)}
      value={email}
      />
      <Text style={styles.titulo}>Password: </Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid='transparent'
      onChangeText={(texto) => setPassword(texto)}
      value={password}
      />

      <Button
      title='Entrar'
      onPress={entrar}
      />

      <Text style={{fontSize: 25, margin: 15, textAlign: 'center'}}>{user}</Text>

      {user.length > 0 ? (
      <Button
      title='Sair'
      onPress={sair}
      />
      ) : (
        <Text style={{fontSize: 25, margin: 15, textAlign: 'center'}}>Nenhum usuário logado</Text>
      )}

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 10
  },
  titulo:{
    fontSize: 20
  },
  input:{
    padding: 10,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#595959',
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 8
  }
})