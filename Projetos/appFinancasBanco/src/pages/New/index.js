import React, { useState } from "react";
import { SafeAreaView, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import Header from "../../components/header";
import RegisterTypes from "../../components/registerTypes";
import api from "../../services/api";
import { useNavigation } from "@react-navigation/native";
import { format } from "date-fns";
import {
    Background,
    Input,
    SubmitButtom,
    SubmitText
} from './style';

export default function New() {

    const navigation = useNavigation();
    const [labelInput, setLabelInput] = useState('');
    const [valueInput, setValueInput] = useState('');
    const [type, setType] = useState('receita');

    function handleSubmit() {
        Keyboard.dismiss();
        if(isNaN(parseFloat(valueInput)) || type == null) {
            Alert.alert('Algo deu errado', 'Preencha todos os campos!');
            return
        }

        Alert.alert('Confirme seus dados', `Tipo: ${type} - valor: ${parseFloat(valueInput)}`, [
            {
                text: 'Cancelar',
                style: 'cancel'
            },
            {
                text: 'Confirmar',
                onPress: ()=> handleAdd()
            }
        ])
    }

    async function handleAdd() {
        Keyboard.dismiss();
        await api.post('/receive', {
            description: labelInput,
            value: Number(valueInput),
            type: type,
            date: format(new Date(), 'dd/MM/yyyy')
        })
        setLabelInput('');
        setValueInput('');
        navigation.navigate('Home');
    }

    return(
        <TouchableWithoutFeedback
        onPress={()=>Keyboard.dismiss()}
        >
            <Background>
                <Header
                title='Registrando'
                />

                <SafeAreaView style={{marginTop: 14, alignItems: "center"}}>
                    <Input
                    placeholder='Descrição do registro'
                    onChangeText={(text)=>setLabelInput(text)}
                    value={labelInput}
                    />

                    <Input
                    placeholder='Valor desejado'
                    keyboardType='numeric'
                    onChangeText={(text)=>setValueInput(text)}
                    value={valueInput}
                    />

                    <RegisterTypes
                    type={type}
                    sendTypeChanged={(item)=>setType(item)}
                    />

                    <SubmitButtom
                    onPress={handleSubmit}
                    >
                        <SubmitText>Registrar</SubmitText>
                    </SubmitButtom>
                </SafeAreaView>
            </Background>
        </TouchableWithoutFeedback>
    )
}