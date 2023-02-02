import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Listagem({data}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nome: {data.nome}</Text>
      <Text style={styles.text}>Cargo: {data.cargo}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#121212',
        marginTop: 10,
        marginBottom: 5,
        padding: 10,
        borderRadius: 8
    },
    text:{
        color: '#f1f1f1',
        fontSize: 18
    }
})