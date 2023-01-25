import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Keyboard } from "react-native";

import Picker from "./src/components/Picker/Index";
import api from "./src/services/api";
import { Alert } from "react-native/Libraries/Alert/Alert";

export default function App() {

  const [moedas, setMoedas] = useState([]);
  const [loading, setLoading] = useState(true);

  const [moedaSelecionada, setMoedaSelecionada] = useState(null);
  const [moedaBValor, setMoedaBValor] = useState(0);

  const [valorMoeda, setValorMoeda] = useState(null);
  const [valorConvertido, setValorConvertido] = useState(0);

  useEffect(()=>{
    async function loadMoedas() {
      const response = await api.get('all');
      
      let arrayMoedas = [];

      Object.keys(response.data).map((key)=>{
        arrayMoedas.push({
          key: key,
          label: key,
          value: key
        })
      });

      setMoedas(arrayMoedas);
      setLoading(false);
    }
    loadMoedas();
  }, [])


  async function converter() {
    if(moedaSelecionada===null || moedaBValor===0) {
      alert('Por favor, selecione uma moeda..');
      return
    }
    const response = await api.get(`all/${moedaSelecionada}-BRL`);
    let resultado = (response.data[moedaSelecionada].ask * parseFloat(moedaBValor)).toFixed(2);
    setValorConvertido(`R$: ${resultado}`);
    setValorMoeda(moedaBValor);

    Keyboard.dismiss();
  }


  if(loading) {
    return(
      <View style={{alignItems:'center', justifyContent:'center', flex: 1}}>
        <ActivityIndicator color='#fb4b57' size={45}/>
      </View>
    )
  } else {
    return(
      <View style={style.container}>
        <View style={style.areaMoeda}>
          <Text style={style.titulo}>Seleciona a moedinha ai meu nobre</Text>
          <Picker moedas={moedas} onChange={(moeda)=>setMoedaSelecionada(moeda)}/>
        </View>
  
        <View style={style.areaValor}>
          <Text style={style.titulo}>Digite um valor para converter em Real(R$)</Text>
          <TextInput
          placeholder="Ex: 150"
          style={style.input}
          keyboardType="numeric"
          onChangeText={(valor)=>setMoedaBValor(valor)}
          />
        </View>
  
        <TouchableOpacity style={style.botaoArea} onPress={converter}>
          <Text style={style.botaoTexto}>Converter</Text>
        </TouchableOpacity>
  
        {valorConvertido!==0 && (
          <View style={style.areaResultado}>
            <Text style={style.valorConvertido}>{valorMoeda} {moedaSelecionada}</Text>
            <Text style={[style.valorConvertido, {fontSize: 18, margin: 5}]}>Corresponde a:</Text>
            <Text style={style.valorConvertido}>{valorConvertido}</Text>
          </View>
        )}
      </View>
    )
  }
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
    marginBottom: 5,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titulo:{
    fontSize:15,
    color: '#010101',
    paddingLeft: 10,
    paddingTop: 10,
  },
  areaValor:{
    width:'90%',
    backgroundColor: '#f1f1f1',
    paddingBottom: 10,
    paddingTop: 10
  },
  input:{
    width: '100%',
    padding: 10,
    height: 45,
    marginTop: 8,
    fontSize: 20,
    color: '#010101'
  },
  botaoArea:{
    width: '90%',
    backgroundColor: '#fb4b57',
    height: 45,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  botaoTexto:{
    color: '#f1f1f1',
    fontSize: 20,
    fontWeight: 'bold'
  },
  areaResultado:{
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 15,
    marginTop: 15,
    padding: 25
  },
  valorConvertido:{
    fontSize: 25,
    color: '#010101',
    fontWeight: 'bold'
  }
})