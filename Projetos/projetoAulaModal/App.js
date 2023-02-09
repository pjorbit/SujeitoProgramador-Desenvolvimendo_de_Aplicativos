import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, Button, Modal } from "react-native";
import Detalhes from "./src/detalhes/Detalhes";

export default function App() {

  const [visivel, setVisivel] = useState(false);

  function acessarBotao() {
    setVisivel(true);
  }

  function voltarBotao() {
    setVisivel(false);
  }


  return(
    <View style={styles.container}>
      <Text style={styles.texto}>Modal invisível</Text>
      <Button title="Acessar" onPress={acessarBotao}/>
      
      <Modal transparent={true} animationType="slide" visible={visivel}>
        <Detalhes fechar={voltarBotao} />
      </Modal>
    
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  texto:{
    fontSize: 25,
    marginBottom: 15
  }
})