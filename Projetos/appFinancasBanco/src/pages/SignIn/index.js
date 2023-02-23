import React, { useState, useContext } from "react";
import { Alert, Platform, ActivityIndicator } from "react-native";
import { AuthContext } from "../../contexts/auth";
import {
    Background,
    Container,
    Logo,
    AreaInput,
    Input,
    SubmitButtom,
    SubmitText,
    Link,
    LinkText
} from './style';

import { useNavigation } from "@react-navigation/native";

export default function SignIn() {

    const { signIp, loadingAuth } = useContext(AuthContext);
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignIn() {
        if(email === '' || password === '') {
            Alert.alert('Atenção!', 'Preencha todos os campos!');
            return
        }
        signIp(email, password);
    }

    return(
        <Background>
            <Container
            behavior={Platform.OS === "ios" ? 'pading' : ''}
            enabled
            >
                <Logo
                source={require('../../assets/Logo.png')}
                />

                <AreaInput>
                    <Input
                    placeholder='Seu email..'
                    value={email}
                    onChangeText={(text)=>setEmail(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                    placeholder='Sua senha..'
                    value={password}
                    onChangeText={(text)=>setPassword(text)}
                    secureTextEntry={true}
                    />
                </AreaInput>

                <SubmitButtom activeOpaticy={0.7} onPress={handleSignIn}>
                    {loadingAuth ? (
                        <ActivityIndicator size={16} color='#fff'/>
                    ) : (
                        <SubmitText>Entrar</SubmitText>
                    )}
                </SubmitButtom>

                <Link onPress={()=>navigation.navigate('SignUp')}>
                    <LinkText>Criar uma conta</LinkText>
                </Link>
            </Container>
        </Background>
    )
}