import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Modal, Keyboard, alert } from "react-native";

import Conversor from "./src/modal/Index";

export default function App() {

  const [visivel, setVisivel] = useState(false);
  const [gasolina, setGasolina] = useState(0);
  const [alcool, setAlcool] = useState(0);
  const [resposta, setResposta] = useState('');

  function chamarModal() {
    setVisivel(true)
  }

  function fecharModal() {
    setVisivel(false)
  }

  function calcular() {
    if(gasolina==0 || alcool==0) {
      alert('Entre com os dois números!')
      return
    } else {
      if(alcool/gasolina<0.7) {
        setResposta('Álcool');
        chamarModal();
      } else {
        setResposta('Gasolina');
        chamarModal();
      }
    }
  }

  return(
    <View style={style.container}>

      <View style={style.areaTitulo}>
        <Image
        source={require('./assets/logo.png')}
        style={{width:200, height: 200}}
        />
        <Text style={style.titulo}>Qual a melhor opção?</Text>
      </View>

      <View style={style.areaInput}>
        <Text style={style.inputTitulo}>Álcool(preço por litro):</Text>
        <TextInput
        style={style.input}
        placeholder="Ex: 3.60"
        onChangeText={(valor)=>setAlcool(valor)}
        keyboardType="numeric"
        />
      </View>
      <View style={style.areaInput}>
        <Text style={style.inputTitulo}>Gasolina(preço por litro):</Text>
        <TextInput
        style={style.input}
        placeholder="Ex: 5.82"
        onChangeText={(valor)=>setGasolina(valor)}
        keyboardType="numeric"
        />
      </View>

      <View style={style.areaBotao}>
        <TouchableOpacity style={style.btn} onPress={calcular}>
          <Text style={style.btnTexto}>Calcular</Text>
        </TouchableOpacity>
      </View>

      <Modal animationType="slide" visible={visivel}>
        <Conversor voltar={fecharModal} resposta={resposta} gasolina={gasolina} alcool={alcool}/>
      </Modal>

    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#10403B'
  },
  areaTitulo:{
    alignItems: 'center',
    padding: 25
  },
  titulo:{
    fontSize: 25,
    color: '#f1f1f1',
    fontWeight: 'bold',
    marginTop: 10
  },
  areaInput:{
    paddingLeft: 15,
    paddingBottom: 10
  },
  inputTitulo:{
    fontSize: 18,
    color: '#f1f1f1'
  },
  input:{
    backgroundColor: '#8AA6A3',
    width: '96%',
    padding: 10,
    fontSize: 18,
    color: '#292929',
    borderRadius: 8
  },
  areaBotao:{
    alignItems: 'center',
  },
  btn:{
    backgroundColor: '#127369',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTexto:{
    fontSize: 25,
    fontWeight: 'bold'
  }
})