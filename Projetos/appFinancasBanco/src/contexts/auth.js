import React, { createContext, useState } from "react";
import { Alert } from "react-native";
import api from "../services/api";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {

    const navigation = useNavigation();
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);

    async function signIp(email, password) {
        setLoadingAuth(true);
        try {
            const response = await api.post('/login', {
                email: email,
                password: password
            })
            const { id, name, token } = response.data;
            const data = {
                id,
                name,
                token,
                email
            }
            await AsyncStorage.setItem('@finToken', token);
            api.defaults.headers['Authorization'] = `Bearer %{token}`;
            setUser({
                id,
                name,
                email
            })
            setLoadingAuth(false)
        } catch(error){
            Alert.alert('Sentimos muito :(', 'Algo parece ter dado errado.');
            setLoadingAuth(false);
        }
    }

    async function signUp(nome, email, password) {
        setLoadingAuth(true);
        try {
            const response = await api.post('/users', {
                name: nome,
                password: password,
                email: email
            })
            setLoadingAuth(false)
            navigation.goBack();

        } catch (error) {
            Alert.alert('Sinto muito :(', 'Algo parece ter dado errado');
            setLoadingAuth(false);
        }
    }

    return(
        <AuthContext.Provider value={{ signed: !!user, signUp, signIp, loadingAuth }} >
            {children}
        </AuthContext.Provider>
    )
}