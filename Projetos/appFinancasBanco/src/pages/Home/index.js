import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/header';
import api from '../../services/api';
import { format } from 'date-fns';
import { useIsFocused } from '@react-navigation/native';
import BalanceItem from '../../components/balanceItem';
import { 
    Background, 
    ListBalance 
} from './style';

export default function Home() {

    const isFocused = useIsFocused();
    const [listBalance, setListBalance] = useState([]);
    const [dateMovements, setDateMovements] = useState(new Date());
    const { signOut } = useContext(AuthContext);

    useEffect(()=>{
        let isActive = true;

        async function getMovements() {
            let dateFormated = format(dateMovements, 'dd/MM/yyyy');

            const balance = await api.get('/balance', {
                params:{
                    date: dateFormated
                }
            })
            if(isActive) {
                setListBalance(balance.data);
            }
        }
        getMovements();
        return () => isActive = false;

    },[isFocused])


    function handleSignOut() {
        signOut();
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
            <Button title='Sair' onPress={handleSignOut}/>
        </Background>
    )
}