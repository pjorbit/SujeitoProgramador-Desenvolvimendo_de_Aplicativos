import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, alert, Keyboard } from "react-native";

import api from "./src/services/api";

export default function App() {

  const [cep, setCep] = useState('');
  const [cepUser, setCepUser] = useState(null);
  const inputRef = useRef(null);

  function limpar() {
    setCep('');
    inputRef.current.focus();
    setCepUser(null);
  }

  async function buscar() {
    if(cep=='') {
      alert('Digite um CEP válido!');
      setCep('');
      return
    }
    try {
      const response = await api.get(`/${cep}/json`);
      Keyboard.dismiss();
      setCepUser(response.data);
    } catch (error) {
      console.log(`ERROR: ${error}`);
      Keyboard.dismiss();
    }
  }

  return(
    <SafeAreaView style={style.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={style.text}>Digite o CEP desejado:</Text>
        <TextInput
        style={style.textInput}
        placeholder="Ex: 95630000"
        value={cep}
        onChangeText={(texto)=>setCep(texto)}
        keyboardType="numeric"
        ref={inputRef}
        />
      </View>

      <View style={style.areaBtn}>
        <TouchableOpacity 
        onPress={buscar}
        style={[style.botao, {backgroundColor: '#fb005f'}]}>
          <Text style={style.botaoText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={limpar}
        style={[style.botao, {backgroundColor:'#1d75cd'}]}>
          <Text style={style.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {cepUser &&
        <View style={style.resultado}>
          <Text style={style.itemText}>CEP: {cepUser.cep}</Text>
          <Text style={style.itemText}>Logradouro: {cepUser.logradouro}</Text>
          <Text style={style.itemText}>Bairro: {cepUser.bairro}</Text>
          <Text style={style.itemText}>Cidade: {cepUser.localidade}</Text>
          <Text style={style.itemText}>Estado: {cepUser.uf}</Text>
        </View>
      }
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff'
  },
  text:{
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#292929'
  },
  textInput:{
    width: '90%',
    backgroundColor: '#f1f1f1',
    borderWidth: 2,
    borderColor: '#d1d1d1',
    padding: 10,
    fontSize: 18,
    borderRadius: 5
  },
  areaBtn:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 25
  },
  botao:{
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 5
  },
  botaoText:{
    color: '#f1f1f1',
    fontSize: 15,
    fontWeight: 'bold'
  },
  resultado: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  itemText:{
    fontSize: 18,
    color: '#292929'
  }
})