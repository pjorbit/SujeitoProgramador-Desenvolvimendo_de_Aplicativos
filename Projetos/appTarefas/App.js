import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <SafeAreaView style={style.container}>
      <Text>App</Text>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: '#f2f6fc'
  }
})