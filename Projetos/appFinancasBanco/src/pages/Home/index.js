import React, { useContext, useEffect, useState } from 'react';
import { Alert, TouchableOpacity, Modal, Button } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { format } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import Header from '../../components/header';
import BalanceItem from '../../components/balanceItem';
import HistoricoList from '../../components/historicoList';
import CalendarModal from '../../components/calendarModal';
import { 
    Background, 
    ListBalance,
    Title,
    Area,
    List
} from './style';

export default function Home() {

    const isFocused = useIsFocused();
    const [listBalance, setListBalance] = useState([]);
    const [dateMovements, setDateMovements] = useState(new Date());
    const [movements, setMovements] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(()=>{
        let isActive = true;

        async function getMovements() {
            let dateFormated = format(dateMovements, 'dd/MM/yyyy');

            const receives = await api.get('/receives', {
                params:{
                    date: dateFormated
                }
            })

            const balance = await api.get('/balance', {
                params:{
                    date: dateFormated
                }
            })
            if(isActive) {
                setMovements(receives.data);
                setListBalance(balance.data);
            }
        }
        getMovements();
        return () => isActive = false;

    },[isFocused, dateMovements])

    async function handleDeleteRegister(id) {
        try {
            await api.delete('/receives/delete', {
                params:{
                    item_id: id
                }
            })
            setDateMovements(new Date())
        } catch(error){
            Alert.alert('Sinto muito :(', 'Algo parece ter dado errado.')
        }
    }

    function filterDateMovements(dateSelected) {
        setDateMovements(dateSelected)
    }

    return(
        <Background>
            <Header title='Minhas transações'/>
            <ListBalance
            data={listBalance}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtrator={ item => item.tag }
            renderItem={ ({ item }) => ( <BalanceItem data={item}/> )}
            />

            <Area>
                <TouchableOpacity
                onPress={()=>setModalVisible(true)}
                >
                    <Icon
                    name='event' size={35} color='#101010'
                    />
                </TouchableOpacity>
                <Title>Movimentações do dia</Title>
            </Area>

            <List
            data={movements}
            keyExtrator={ item => item.id}
            renderItem={ ({ item }) => <HistoricoList data={item} deleteItem={handleDeleteRegister}/> }
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 14 }}
            />

            <Modal
            visible={modalVisible}
            animationType='fade'
            transparent={true}
            >
                <CalendarModal 
                setVisible={() => setModalVisible(false)}
                handleFilter={filterDateMovements}
                />
            </Modal>

        </Background>
    )
}