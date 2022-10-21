import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

function App() {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [texto1, setTexto1] = useState('')
  const [texto2, setTexto2] = useState('')

  function enviarInfo() {
    if(texto1===''||texto2==='') {
      alert('Complete as informações!');
      return
    }
    setNome(`Nome: ${texto1}`)
    setCargo(`Cargo: ${texto2}`)
  }

  return(
    <View style={styles.container}>

      <Text style={styles.containerTexto}>Seja Bem Vindo!</Text>

      <View style={styles.cardArea}>
        <Text style={styles.cardTexto}>{nome}</Text>
        <Text style={styles.cardTexto}>{cargo}</Text>
      </View>

      <View style={styles.inputArea}>
        <TextInput style={styles.input} placeholder="Entre com seu nome.." onChangeText={(texto1) => setTexto1(texto1)}/>
        <TextInput style={styles.input} placeholder="Entre com seu cargo.." onChangeText={(texto2) => setTexto2(texto2)}/>
      </View>

      <TouchableOpacity style={styles.btnArea} onPress={()=>enviarInfo()}>
        <View style={styles.btnEnviar}>
          <Text style={styles.btnTexto}>Enviar</Text>
        </View>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#ccc',
    marginTop: 25,
    alignItems: 'center'
  },
  containerTexto:{
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold'
  },
  cardArea:{
    width: '90%',
    height:150,
    margin: 15,
    padding: 10,
    backgroundColor: '#1212',
    borderColor: '#eee',
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: '#121212',
    justifyContent: 'center'
  },
  cardTexto:{
    fontSize:19,
    color: '#eee'
  },
  inputArea:{
    height: 90,
    width: '100%',
    alignItems: 'center',
  },
  input:{
    width:'85%',
    height: 40,
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
    backgroundColor: '#5555',
    color: '#101',
    fontSize: 16,
    fontWeight:'500'
  },
  btnArea:{
    margin: 15,
    width: '100%',
    height: 50,
    alignItems: 'center'
  },
  btnEnviar:{
    flex: 1,
    width: '40%',
    backgroundColor: '#121212',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTexto:{
    fontSize: 25,
    color: '#eee',
    fontWeight: 'bold'
  }
})

export default App;