import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Feather } from '@expo/vector-icons';

export default function Product({ data, addToCart }) {

    return(
        <View style={style.container}>
            <View style={style.imgArea}>
                <Image
                style={style.img}
                source={data.image}
                resizeMode="contain"
                />
            </View>
            <View style={style.areaProduto}>
                <Text style={style.produtoText}>{data.name}</Text>
                <Text style={style.produtoText}>R$ {data.price}</Text>
            </View>
            <View style={style.containerBtn}>
                <TouchableOpacity style={style.btnArea}
                onPress={addToCart}
                >
                    <Text style={style.btnText}>Add to cart</Text>
                    <Feather
                    name="shopping-bag"
                    size={15}
                    color='#fff'
                    />
                </TouchableOpacity>
            </View>
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
        height: 105
    },
    img:{
        height: 100,
        width: 100
    },
    areaProduto:{
        marginBottom: 40,
        alignItems: 'center'
    },
    produtoText:{
        fontWeight: 'bold',
        fontSize: 17
    },
    containerBtn:{
        flexDirection: 'row',
        height: 70,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        position: 'absolute',
        marginTop: 150
    },
    btnArea:{
        height: 45,
        width: '100%',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4843D9',
        flexDirection: 'row',
        gap: 7
    },
    btnText:{
        fontSize: 16,
        color: '#fff',
    }
})