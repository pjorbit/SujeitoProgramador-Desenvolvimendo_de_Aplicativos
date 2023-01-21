import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Detalhes(props) {
    return(
        <View style={style.container}>
            <View style={style.modalContainer}>
                <TouchableOpacity style={style.btnVoltar} onPress={props.voltar}>
                    <Text style={{color: '#f5f5f5', fontSize:16}}>Voltar</Text>
                </TouchableOpacity>

                <Text style={style.titulo}>{props.filmes.nome}</Text>
                <Text style={style.sinopse}>Sinopse:</Text>
                <Text style={style.descricao}>{props.filmes.sinopse}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginLeft: 10,
        marginRight: 10
    },
    modalContainer:{
        height: '50%',
        backgroundColor: '#121211',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15

    },
    btnVoltar: {
        padding: 10,
        backgroundColor: '#e52246',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    titulo:{
        color: '#f5f5f5',
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        padding: 10
    },
    sinopse:{
        color: '#f5f5f5',
        marginLeft: 15,
        fontSize: 18
    },
    descricao:{
        color: '#f5f5f5',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15
    }
})