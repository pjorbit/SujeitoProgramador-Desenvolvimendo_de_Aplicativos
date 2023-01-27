import React, { useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, alert } from "react-native";

import * as Animatable from 'react-native-animatable';

const ButtonAnimated = Animatable.createAnimatableComponent(TouchableOpacity);

export default function App() {

  const buttonRef = useRef(null);

  function handleClick(){
    buttonRef.current.bounce()
  }

  return(
    <View style={style.container}>
      <Animatable.Text
      style={style.title}
      animation='shake'
      duration={1000}
      >Ola</Animatable.Text>

      <ButtonAnimated style={style.areaBtn}
      animation='shake'
      duration={2000}
      ref={buttonRef}
      onPress={handleClick}
      >
        <Text style={style.btnTitulo}>Botaozinn</Text>
      </ButtonAnimated>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title:{
    fontSize:85,
    fontWeight: 'bold',
    color: '#52f'
  },
  areaBtn:{
    width: '50%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#52f',
    backgroundColor: '#191919',
    marginTop: 15
  },
  btnTitulo:{
    fontSize: 25,
    color: '#f1f1f1',
  }
})