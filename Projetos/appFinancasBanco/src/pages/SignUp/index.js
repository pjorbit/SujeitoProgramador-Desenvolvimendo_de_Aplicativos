import React, { useContext, useState } from "react";
import {
    Background,
    Container,
    AreaInput,
    Input,
    SubmitButtom,
    SubmitText,
} from '../SignIn/style';
import { AuthContext } from "../../contexts/auth";
import { ActivityIndicator, Alert } from "react-native";

export default function SignUp() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signUp, loadingAuth } = useContext(AuthContext);

    function handleSingUp() {
        if(nome === '' || email === '' || password === '') {
            Alert.alert('Atenção!', 'Preencha todos os campos.');
            return
        };
        signUp(nome, email, password)
    }

    return(
        <Background>
            <Container
            behavior={Platform.OS === "ios" ? 'pading' : ''}
            enabled
            >
                <AreaInput>
                    <Input
                    placeholder='Seu nome..'
                    value={nome}
                    onChangeText={(text)=>setNome(text)}
                    />
                </AreaInput>

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

                <SubmitButtom activeOpaticy={0.7} onPress={handleSingUp}>
                    {loadingAuth ? (
                        <ActivityIndicator size={16} color='#fff'/>
                    ) : (
                        <SubmitText>Cadastrar</SubmitText>
                    )}
                </SubmitButtom>
            </Container>
        </Background>
    )
}