import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/header';
import { Background } from './style'

export default function Home() {

    const { signOut } = useContext(AuthContext);

    function handleSignOut() {
        signOut();
    }

    return(
        <Background>
            <Header title='Minhas transações'/>
        </Background>
    )
}