import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, alert } from "react-native";

export default function App() {

  const larguraAnimada = useRef(new Animated.Value(15)).current;
  const alturaAnimada = useRef(new Animated.Value(50)).current;

  useEffect(()=>{

    Animated.sequence([
      Animated.timing(larguraAnimada, {
        toValue: 100,
        duration: 1000,
        useNativeDriver: false
      }),
      Animated.timing(alturaAnimada, {
        toValue: 100,
        duration: 1000,
        useNativeDriver: false
      })
    ]).start( darAlerta );

  },[])

  let porcentagemLargura = larguraAnimada.interpolate({
    inputRange: [15, 100],
    outputRange: ['15%', '100%']
  })

  let porcentagemAltura = alturaAnimada.interpolate({
    inputRange: [50, 100],
    outputRange: ['10%', '100%']
  })

  function darAlerta() {
    console.log('O alert não funciona pqp!!!!!!')
  }

  return(
    <View style={style.container}>
      <Animated.View 
      style={{
        width:porcentagemLargura, 
        height: porcentagemAltura, 
        backgroundColor: '#292929',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15
        }}>
      </Animated.View>
    </View>
  )
}


const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})