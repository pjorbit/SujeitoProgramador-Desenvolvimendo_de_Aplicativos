import React, { useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { Calendar, LocaleConfig } from 'react-native-calendars';
import {
    Container,
    ModalContent,
    ButtonFilterText,
    ButtonFilter
} from './style';

export default function CalendarModal({ setVisible, handleFilter }) {

    const [dateNow, setDateNow] = useState(new Date());
    const [markedDates, setMakedDates] = useState({});

    function handleOnDayPress(date) {
        // console.log(date.dateString)
        setDateNow(new Date(date.dateString));

        let markedDay = {};

        markedDay[date.dateString] = {
            selected: true,
            selectedColor: '#3b3Dbf',
            textColor: '#fff'
        }

        setMakedDates(markedDay);
    }

    function handleFilterDate() {
        handleFilter(dateNow);
        setVisible();
    }

    return(
        <Container>
            <TouchableWithoutFeedback
            onPress={setVisible}
            >
                <View style={{ flex: 1 }}></View>
            </TouchableWithoutFeedback>

            <ModalContent
            onPress={() => {setVisible()}}
            >
                <Calendar
                onDayPress={handleOnDayPress}
                markedDates={markedDates}
                enableSwipeMonths={true}
                theme={{
                    todayTextColor: '#ff0000',
                    selectedDayBackgroundColor: '#00adf5',
                    selectedDayTextColor: '#fff'
                }}
                />

                <ButtonFilter onPress={handleFilterDate}>
                    <ButtonFilterText>Filtrar</ButtonFilterText>
                </ButtonFilter>
            </ModalContent>
        </Container>
    )
}