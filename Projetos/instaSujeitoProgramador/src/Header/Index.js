import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Header() {
    return(
        <View style={style.header}>
            <TouchableOpacity>
                <Image
                source={require('../../assets/logo.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                source={require('../../assets/send.png')}
                style={style.send}
                />
            </TouchableOpacity>
        </View>
    )
}


const style = StyleSheet.create({
    header:{
        height: 45,
        width: '100%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        borderBottomWidth: 0.5,
        shadowColor: '#121212',
        elevation: 5
    },
    send:{
        width: 20,
        height: 20
    }
})