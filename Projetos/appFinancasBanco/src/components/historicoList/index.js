import React from "react";
import { TouchableWithoutFeedback, Alert } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import {
    Container,
    TipoText,
    Tipo,
    IconView,
    ValorText
} from './style';

export default function HistoricoList({ data, deleteItem }) {

    function handleDelete() {
        Alert.alert('Atenção!', 'Tem certeza que deseja deletar esse registro?', [
            {
                text: 'Cancelar',
                style: 'cancel'
            },
            {
                text: 'Confirmar',
                onPress: () => deleteItem(data.id)
            }
        ])
    }

    return(
        <TouchableWithoutFeedback onLongPress={handleDelete}>
            <Container>
                <Tipo>
                    <IconView tipo={data.type}>
                        <Icon
                        name= {data.type === 'despesa' ? 'arrow-down' : 'arrow-up'}
                        size={18}
                        color='#fff'
                        />
                    <TipoText>{data.type}</TipoText>
                    </IconView>
                </Tipo>
                <ValorText>R$ {data.value}</ValorText>
            </Container>
        </TouchableWithoutFeedback>
    )
}