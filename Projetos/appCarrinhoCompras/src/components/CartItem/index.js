import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function CartItem({ data, addAmount, removeAmount }) {

    const [amount, setAmount] = useState(data?.amount);

    function handleIncrease() {
        addAmount();
        setAmount( item => item +1 );
    }

    function handleDecrease() {
        removeAmount();
        if(amount === 0) {
            setAmount(0);
            return
        }
        setAmount( item => item -1 );
    }

    return(
        <View style={style.container}>
            <View style={style.imgContainer}>
                <Image
                style={{width: 90, height: 90}}
                source={data.image}
                resizeMode="contain"
                />
            </View>
            <View style={style.textContainer}>
                <Text style={{fontSize: 22, fontWeight: 'bold'}}>{data.name}</Text>
                <Text style={{fontSize: 26, }}>R$ {data.price}</Text>
            </View>
            <View style={style.btnContainer}>
                <TouchableOpacity style={style.btnArea}
                onPress={handleIncrease}
                >
                    <Text style={{ color: '#fff', fontSize: 20 }}>+</Text>
                </TouchableOpacity>
                <View>
                    <Text style={{ fontSize: 24, color: '#edf1fa', fontWeight: 'bold' }}>{amount}</Text>
                </View>
                <TouchableOpacity style={style.btnArea}
                onPress={handleDecrease}
                >
                    <Text style={{ fontSize: 20, color: '#fff' }}>-</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 100,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        borderRadius: 10
    },
    imgContainer:{
        height: '100%',
        width: '30%',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer:{
        width: '50%',
        height: '100%',
        justifyContent: 'center'
    },
    btnContainer:{
        height: '100%',
        width: '15%',
        backgroundColor: '#4843D9',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        justifyContent:'space-evenly'
    },
    btnArea:{
        width: '100%',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    }
})