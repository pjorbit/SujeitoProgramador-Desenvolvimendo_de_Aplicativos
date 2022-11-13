import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function App() {
  return(
    <View style={styles.container}>
      <Text>Testando</Text>
      <FontAwesome
      name="gitlab"
      size={35}
      color='#252525'
      />

      <TouchableOpacity style={styles.btnArea}>
        <FontAwesome
        name="twitch"
        size={40}
        color='#62136E'
        />
        <Text style={styles.btnText}>Entrar na live</Text>
      </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnArea:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    padding:5,
    borderRadius:5,
    backgroundColor:'#eeee'
  },
  btnText:{
    fontSize:20,
    paddingLeft:10,
    color:'#DE2AFA',
    fontWeight:'500'
  }
})