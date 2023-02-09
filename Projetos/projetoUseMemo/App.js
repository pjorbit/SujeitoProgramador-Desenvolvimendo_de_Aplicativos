import React, { useEffect, useMemo, useState, useRef } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {

  const [input, setInput] = useState('');
  const [nome, setNome] = useState('');

  const inputRef = useRef(null);

  useEffect(()=>{
    async function carregadorDados() {
      await AsyncStorage.getItem('@nome').then((value)=>{
        setNome(value);
      })
    }
    carregadorDados();

  }, [])


  async function gravaNome() {
    await AsyncStorage.setItem('@nome', input);
    if(input==='') {
      alert('Entre com um nome..')
    }
    setNome(input);
    setInput('');
  }

  // const tamanhoNome = useMemo(()=>{
  //   return nome.length;
  // }, [nome]);

  function chamarInput() {
    inputRef.current.focus()
  }

  function limparInput() {
    inputRef.current.clear()
  }

  return(
    <View style={styles.container}>

      <View style={styles.viewInput}>
        <TextInput 
        style={styles.input}
        value={input}
        onChangeText={(texto)=>setInput(texto)}
        ref={inputRef}
        />
      </View>

      <TouchableOpacity onPress={()=>gravaNome()}>
        <Text style={styles.botao}>+</Text>
      </TouchableOpacity>

      <Text style={styles.nome}>{nome}</Text>
      {/* <Text style={styles.nome}>Possui: {tamanhoNome} letras</Text> */}

      <TouchableOpacity onPress={ chamarInput }>
        <Text style={styles.botao}>Focar input</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={ limparInput }>
        <Text style={styles.botao}>Limpar input</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    marginTop:35,
  },
  viewInput:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  input:{
    width:350,
    height:40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10
  },
  botao:{
    backgroundColor: '#595959',
    color:'#fff',
    height: 40,
    padding: 10,
    margin: 4
  },
  nome:{
    fontSize:25,
    marginTop:15
  }
})