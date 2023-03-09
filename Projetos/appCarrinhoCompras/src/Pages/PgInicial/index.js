import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LottieView from 'lottie-react-native';


export default function PgInicial() {
    const navigation = useNavigation();

    return(
        <View style={style.container}>
            <View style={style.viewCarrinho}>
                <LottieView
                source={require('../../assets/shopping-cart-check.json')}
                autoPlay={true}
                loop={true}
                style={{ width: 350, height: 350 }}
                resizeMode="cover"
                />
            </View>

            <View style={style.viewBotao}>
                <TouchableOpacity
                style={style.botaoArea}
                onPress={()=> navigation.navigate('Home')}
                >
                    <Text style={style.botaoText}>Go Shopping</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#edf1fa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewCarrinho:{
        flex: 2,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    viewBotao:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaoArea:{
        height: 80,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7672F2',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 14,
    },
    botaoText:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#f2f2f2'
    },
})