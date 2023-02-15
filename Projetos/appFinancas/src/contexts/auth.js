import React, { createContext,useState } from 'react';
import { Alert } from 'react-native';
import api from '../services/api';
import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false)

    const navigation = useNavigation();

    async function signUp(nome, email, senha) {
        setLoadingAuth(true);
        try {
            const response = await api.post('/users', {
                name: nome,
                email: email,
                password: senha
            })
            setLoadingAuth(false);
            navigation.goBack();
        }catch(error) {
            Alert.alert('Sinto muito :(', 'Algo parece ter dado errado');
            setLoadingAuth(false);
        }
    }

    return(
        <AuthContext.Provider value={{ signed: !!user, user, signUp, loadingAuth }}>
            {children}
        </AuthContext.Provider>
    )
}