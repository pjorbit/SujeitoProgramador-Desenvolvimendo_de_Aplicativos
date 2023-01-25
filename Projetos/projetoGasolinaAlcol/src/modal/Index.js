import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Conversor(props) {

    
    return(
        <View style={style.container}>
            <View style={style.areaImagem}>
                <Image
                source={require('../../assets/gas.png')}
                style={{width:200, height: 200}}
                />
                <Text style={style.titulo}>Compensa usar {props.resposta}</Text>
            </View>
            <View style={style.areaResposta}>
                <Text style={style.respostaTitulo}>Com os preços</Text>
                <Text style={style.respostaTexto}>Álcool: R${props.alcool}</Text>
                <Text style={style.respostaTexto}>Gasolina: R${props.gasolina}</Text>
            </View>
            <View style={style.areaBotao}>
                <TouchableOpacity style={style.btn}>
                    <Text 
                    style={style.btnTexto} 
                    onPress={props.voltar}>Calcular novamente</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#4C5958'
    },
    areaImagem:{
        alignItems: 'center',
        padding: 25
    },
    titulo:{
        fontSize: 25,
        color: '#8AA6A3',
        fontWeight: 'bold',
        marginTop: 10
    },
    areaResposta:{
        alignItems: 'center'
    },
    respostaTitulo:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#8AA6A3',
        padding: 5
    },
    respostaTexto:{
        fontSize: 18,
        color: '#f1f1f1',
    },
    areaBotao:{
        alignItems: 'center',
        marginTop: 15
    },
    btn:{
        backgroundColor: 'transparent',
        borderColor: '#127369',
        borderWidth: 3,
        padding: 15,
        borderRadius: 8,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
      btnTexto:{
        fontSize: 25,
        fontWeight: 'bold'
    }
})