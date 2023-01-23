import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

export default function Picker() {

    const placeHolder = {
        color: '#010101',
        value: null,
        label: 'Selecione a moeda..'
    }

    return(
        <RNPickerSelect
        placeholder={placeHolder}
        items={[
            {key: 1, label:'USD', value:'USD'},
            {key: 1, label:'EUR', value:'EUR'},
        ]}
        onValueChange={(valor)=>console.log(valor)}
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