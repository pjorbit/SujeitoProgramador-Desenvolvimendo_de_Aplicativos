import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";

export default function App() {

  const [feed, setFeed] = useState([
    {_id: '1', nome: 'Rafael Machado', idade: 22, email: 'rafael@gmail.com'},
    {_id: '2', nome: 'Maiquele Rasch', idade: 21, email: 'rafael@gmail.com'},
    {_id: '3', nome: 'Pedro Silveira', idade: 21, email: 'rafael@gmail.com'},
    {_id: '4', nome: 'Duda Skieries', idade: 22, email: 'rafael@gmail.com'},
    {_id: '5', nome: 'Dieni Lazzari', idade: 21, email: 'rafael@gmail.com'},
    {_id: '6', nome: 'Jardel Fernandes', idade: 25, email: 'rafael@gmail.com'},
    {_id: '7', nome: 'Weslley Cimol', idade: 23, email: 'rafael@gmail.com'},
  ])


  return (
    <View style={styles.tela}>
      <FlatList
      keyExtractor={(item)=>item._id} //usado quando nãos sabemos qual o id, dessa forma idicamos manualmente onde está o íncide de cada item
      data={feed}
      renderItem={ ({item}) => <Pessoa data={item}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  tela:{
    flex: 1
  },
  areaPessoa:{
    height:150,
    backgroundColor: '#4967',
    marginBottom: 25
  },
  textoPessoa:{
    color: '#292929',
    padding: 10
  }
})

function Pessoa(props) {
  return(
    <View style={styles.areaPessoa}>
      <Text style={styles.textoPessoa}>{props.data.nome}</Text>
      <Text style={styles.textoPessoa}>{props.data.idade}</Text>
      <Text style={styles.textoPessoa}>{props.data.email}</Text>
    </View>
  )
}