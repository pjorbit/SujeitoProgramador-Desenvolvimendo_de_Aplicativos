import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Picker from "./src/components/Picker/Index";

export default function App() {
  return(
    <View style={style.container}>
      <View style={style.areaMoeda}>
        <Text style={style.titulo}>Seleciona a moedinha ai meu nobre</Text>
        <Picker/>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#101215',
    alignItems: 'center',
    paddingTop: 35
  },
  areaMoeda:{
    width: '90%',
    backgroundColor: '#f1f1f1',
    paddingTop: 9,
    marginBottom: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titulo:{
    fontSize:15,
    color: '#010101',
    paddingLeft: 10,
    paddingTop: 10,
  }
})