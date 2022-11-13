import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Detalhes(props) {
    return(
        <View style={styles.container}>
            <View style={styles.modal}>
                <Text style={styles.titulo}>Seja bem vindo!</Text>
                <Button title='Fechar' onPress={ props.fechar }/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 15,
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: 10
    },
    modal:{
        height: 350,
        width: '100%',
        backgroundColor: '#434343',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo:{
        fontSize: 35,
        padding: 12,
        color: '#eee'
    }
})