import { View, Text, Button, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const backGround = require('../assets/281564.jpg')

export default function Login() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground
            source={backGround}
            style={styles.backGround}
            >
                <TouchableOpacity
                onPress={navigation.goBack}
                style={styles.areaBtn}
                >
                    <Text style={styles.btnText}>Sair </Text>
                    <Icon
                    name='log-out'
                    color='#292929'
                    size={25}
                    />
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    backGround:{
        flex: 1,
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    areaBtn:{
        flexDirection: 'row',
        width: 150,
        height: 50,
        backgroundColor: '#f9f9f9',
        elevation: 5,
        borderRadius: 9,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 150,
        padding: 10
    },
    btnText:{
        fontSize: 20,
        color: '#292929'
    },
})