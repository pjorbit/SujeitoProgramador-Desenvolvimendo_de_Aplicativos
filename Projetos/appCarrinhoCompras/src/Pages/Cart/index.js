import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';

export default function Cart() {

    const navigation = useNavigation();

    return(
        <View style={style.container}>
            <View style={style.containerBtnVoltar}>
                <TouchableOpacity 
                style={style.areaBtnVoltar}
                onPress={()=>navigation.goBack()}
                >
                    <Feather
                    name="chevron-left"
                    size={35}
                    color='#101010'
                    />
                </TouchableOpacity>
            </View>
            <View style={style.containerProdutos}>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        paddingStart: 10,
        paddingEnd: 10,
        backgroundColor: '#edf1fa'
    },
    containerBtnVoltar:{
        height: 80,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    areaBtnVoltar:{
        backgroundColor: '#fff',
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginRight: 10
    },
    areaBtnText:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    containerProdutos:{
        flex: 1,
        borderWidth: 1
    }
})