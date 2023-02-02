import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert, FlatList, ActivityIndicator } from "react-native";

import firebase from "./src/firebaseConnection";
import Listagem from "./src/Listagem";

console.disableYellowBox = true

export default function App() {

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{

    async function dados() {
      await firebase.database().ref('Usuarios').on('value', (snapshop)=>{
        setUsuarios([]);

        snapshop.forEach((chilItem)=>{
          let data = {
            key: chilItem.key,
            nome: chilItem.val().Nome,
            cargo: chilItem.val().Cargo
          }
          setUsuarios(oldArray=>[...oldArray, data].reverse())
        })
        setLoading(false)
      })
    }

    dados()

  }, [])


  async function cadastrar() {
    if(nome !== '' && cargo !== '') {
      let usuarios = firebase.database().ref('Usuarios');
      let chave = usuarios.push().key;

      usuarios.child(chave).set({
        Nome: nome,
        Cargo: cargo
      })
      Alert('Usuario adicionado com exito');
      setNome('');
      setCargo('');
    }
  }



  return(
    <View style={style.container}>
      <Text style={style.texto}>Nome</Text>
      <TextInput
      style={style.input}
      underlineColorAndroid="transparent"
      onChangeText={(texto)=>setNome(texto)}
      value={nome}
      />

      <Text style={style.texto}>Cargo</Text>
      <TextInput
      style={style.input}
      underlineColorAndroid="transparent"
      onChangeText={(texto)=>setCargo(texto)}
      value={cargo}
      />

      <Button
      title="Novo funcionário"
      onPress={cadastrar}
      />

      <Text></Text>

      {loading ? 
      (
        <ActivityIndicator color='#121212' size={45}/>
      ) :
      (
        <FlatList
        keyExtractor={item => item.key}
        data={usuarios}
        renderItem={ ({item}) => (<Listagem data={item}/>) }
        />
      )
    }
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    margin: 10
  },
  texto:{
    fontSize: 20
  },
  input:{
    height: 40,
    padding: 10,
    marginBottom: 10,
    borderColor: '#121212',
    borderWidth: 1,
    fontSize: 18
  }
})

      //olheiro ou listener da database, monitóra a database constantemente
      // await firebase.database().ref('Nome').on('value', (snapshop)=>{
      //   setNome(snapshop.val())
      // })

      //monitóra a database apenas uma vez
      // await firebase.database().ref('Usuarios/1').once('value', (snapshop)=>{
      //   setNome(snapshop.val().Nome)
      //   setIdade(snapshop.val().Idade)
      // })

      //criando um nó no database
      // await firebase.database().ref('Tipo').set('Deu certo');

      //excluindo um nó no database
      // await firebase.database().ref('Tipo').remove();

      //adicionando um nó dentro de um nó já existente
      
      //método não recomendado, se não passar todos os itens {Nome, Cargo, etc..} ele ira excluir todos os que não foram passados
      // await firebase.database().ref('Usuarios').child(3).set({
      //   Nome: 'Eduardo Skieres',
      //   Cargo: 'Desenvolvedor Mobile'
      // })

      //método que atualiza o nó dentro de um nó existente sem excluir nada
      // await firebase.database().ref('Usuarios').child(3).update({
      //   Nome: 'Vitor Castro'
      // })