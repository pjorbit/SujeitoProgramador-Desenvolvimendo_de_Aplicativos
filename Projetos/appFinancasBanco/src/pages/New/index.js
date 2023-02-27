import React, { useState } from "react";
import { SafeAreaView, TouchableWithoutFeedback, Keyboard } from "react-native";
import Header from "../../components/header";
import {
    Background,
    Input,
    SubmitButtom,
    SubmitText
} from './style';

export default function New() {

    const [labelInput, setLabelInput] = useState('');
    const [valueInput, setValueInput] = useState('');
    const [type, setType] = useState('receita');

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
                    <SubmitButtom>
                        <SubmitText>Registrar</SubmitText>
                    </SubmitButtom>
                </SafeAreaView>
            </Background>
        </TouchableWithoutFeedback>
    )
}