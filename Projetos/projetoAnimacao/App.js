import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

export default function App() {

  const larguraAnimada = useRef(new Animated.Value(100)).current;
  const alturaAnimada = useRef(new Animated.Value(100)).current;
  const arredondarBorda = useRef(new Animated.Value(0)).current;
  const mostrarView = useRef(new Animated.Value(0)).current;

  useEffect(()=>{

    Animated.sequence([

      Animated.timing(mostrarView, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false
      }),
      Animated.parallel([
        Animated.timing(larguraAnimada, {
          toValue: 200,
          duration: 2000,
          useNativeDriver: false
        }),
        Animated.timing(alturaAnimada, {
          toValue: 200,
          duration: 2000,
          useNativeDriver: false
        }),
        Animated.timing(arredondarBorda, {
          toValue: 20,
          duration: 1000,
          useNativeDriver: false
        })
      ])
    ]).start();

  },[])


  return(
    <View style={style.container}>
      <Animated.View 
      style={{
        width:larguraAnimada, 
        height: alturaAnimada, 
        backgroundColor: '#292929',
        justifyContent: 'center',
        borderRadius: arredondarBorda,
        opacity: mostrarView
        }}>
          
        <Text 
        style={{
          textAlign: 'center', 
          fontSize:25, color:'#f1f1f1'
          }}>Ola</Text>
      </Animated.View>
    </View>
  )
}


const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})