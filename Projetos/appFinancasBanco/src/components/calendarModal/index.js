import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import {

    Container,
    ModalContent,
    ButtonFilterText,
    ButtonFilter

} from './style';

export default function CalendarModal({modalVisibilidade}) {
    return(
        <Container>
            <TouchableWithoutFeedback>
                <View style={{ flex: 1 }}></View>
            </TouchableWithoutFeedback>

            <ModalContent
            onPress={() => {modalVisibilidade()}}
            >
                <ButtonFilter>
                    <ButtonFilterText>Fechar</ButtonFilterText>
                </ButtonFilter>
            </ModalContent>
        </Container>
    )
}