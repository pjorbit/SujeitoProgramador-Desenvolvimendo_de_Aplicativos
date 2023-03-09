import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Product({ data }) {
    return(
        <View style={style.container}>
            <View style={style.imgArea}>
                <Image
                style={style.img}
                source={require('../../assets/CarrinhoBG.png')}
                resizeMode="contain"
                />
            </View>
            <View style={style.areaProduto}>
                <Text style={style.produtoText}>{data.name}</Text>
                <Text style={style.produtoText}>R$ {data.price}</Text>
            </View>
            <TouchableOpacity style={style.btnArea}>
                <Text style={style.btnText}>Comprar</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flexDirection: 'column',
        width: 160,
        height: 200,
        borderRadius: 25,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 15,
        marginBottom: 25
    },
    imgArea:{
    },
    img:{
        height: 110,
        width: 120
    },
    areaProduto:{
        marginBottom: 40,
        alignItems: 'center'
    },
    produtoText:{
        fontWeight: 'bold',
        fontSize: 16
    },
    btnArea:{
        height: 50,
        width: 100,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4843D9',
        position: 'absolute',
        marginTop: 170
    },
    btnText:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    }
})