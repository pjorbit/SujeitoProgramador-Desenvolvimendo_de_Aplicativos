import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Sobre() {
    return(
        <View style={styles.container}>
            <Text>Página SOBRE NÓS</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})