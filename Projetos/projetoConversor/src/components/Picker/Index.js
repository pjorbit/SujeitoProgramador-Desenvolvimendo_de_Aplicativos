import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

export default function Picker(props) {

    const placeHolder = {
        color: '#010101',
        value: null,
        label: 'Selecione a moeda..'
    }

    return(
        <RNPickerSelect
        placeholder={placeHolder}
        items={props.moedas}
        onValueChange={(valor)=>props.onChange(valor)}
        style={{
            inputIOS:{
                fontSize: 20,
                color: '#292929'
            },
            inputAndroid:{
                fontSize: 20,
                color: '#292929'
            }
        }}
        />
    )
}