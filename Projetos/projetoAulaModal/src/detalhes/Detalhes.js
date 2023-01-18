import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Detalhes(props) {
    return(
        <View style={styles.container}>
            <View style={styles.modal}>
                <Text style={styles.modalText}>Agora esta visível!</Text>
                <Button title="Voltar" onPress={props.fechar}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    modal:{
        height: 400,
        width: '100%',
        backgroundColor: '#252525',
        padding: 20,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalText:{
        fontSize: 25,
        marginBottom: 15,
        color: '#fff'
    }
})