import React, { useState, useEffect, useMemo, useRef } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [input, setInput] = useState('');
  const [nome, setNome] = useState('Ana');

  const inputRef = useRef(null);

  useEffect(()=>{
    async function pegarDado(){
      await AsyncStorage.getItem('@nome').then((value)=>{
        setNome(value)
      })
    }

    pegarDado();

  },[])

  async function gravarNome() {
    await AsyncStorage.setItem('@nome', input)
    setNome(input);
    setInput('')
  }

  function chamarInput() {
    inputRef.current.focus();
    inputRef.current.clear();
  }

  const letrasNome = useMemo(()=>{
    return nome.length;
  }, [nome])

  return (
    <View style={styles.container}>
      
      <View style={styles.viewInput}>
        <TextInput style={styles.input} value={input} onChangeText={(texto)=>setInput(texto)} ref={inputRef}/>
        <TouchableOpacity onPress={gravarNome}>
          <Text style={styles.btn}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.nome}>{nome}</Text>

      <Text style={styles.nome}>Possui: {letrasNome}</Text>

      <TouchableOpacity onPress={chamarInput}>
        <Text>Chamar ref</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 35
  },
  viewInput:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  input:{
    width:350,
    height:40,
    borderWidth:1,
    borderColor: '#111',
    padding: 10
  },
  btn:{
    backgroundColor: '#222',
    color: '#eee',
    padding: 10,
    height: 40,
    marginLeft: 5
  },
  nome:{
    marginTop: 15,
    fontSize: 30
  }
});
