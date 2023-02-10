import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Alert } from 'react-native'
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

export default function TaskList({ data, deleteItem, editItem }) {
    return (
        <View style={style.container}>
            <TouchableOpacity
            style={style.araeIcon}
            onPress={()=>deleteItem(data.key)}
            >
                <Feather
                name='trash'
                color='#fff'
                size={18}
                />
            </TouchableOpacity>
            <View>
                <TouchableWithoutFeedback onPress={()=>editItem(data)}>
                    <Text style={style.textoTarefa}>{data.nome}</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#292929',
        marginBottom: 10,
        padding: 14,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textoTarefa:{
        color: '#f9f9f9',
        fontSize: 16
    },
    araeIcon:{
        marginRight: 10,
        paddingRight: 10, 
        borderRightColor: '#fff',
        borderRightWidth: 1,
    }
})