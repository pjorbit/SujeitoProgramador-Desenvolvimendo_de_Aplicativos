import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';

export default function Sobre() {

    const route = useRoute();
    const navigation = useNavigation();

    useLayoutEffect(()=>{

        navigation.setOptions({
            title: route.params.nome === '' ? 'Página Sobre Nós' : route.params?.nome
        })

    }, [navigation])

    return(
        <View style={styles.container}>
            <Text>Página SOBRE NÓS</Text>
            <Text>{route.params?.nome}</Text>
            <Text>{route.params?.email}</Text>
            <Button title='TELA CONTATOS' onPress={()=>navigation.navigate('Contatos')}/>
            <Button title='Voltar uma tela' onPress={()=> navigation.goBack()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})