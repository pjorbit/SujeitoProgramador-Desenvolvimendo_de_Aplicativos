import React, { useContext, useState } from 'react';
import { Alert, ActivityIndicator } from 'react-native';

import {
    Background,
    AreaInput,
    Container,
    Input,
    SubmitButton,
    SubmitText
} from '../SignIn/Styles';

import { AuthContext } from '../../contexts/auth';

export default function SignUp() {

    const { signUp, loadingAuth } = useContext(AuthContext);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function handleSignUp() {
        if(nome === '' || email === '' || senha === '') {
            Alert.alert('Por favor', 'Preencha todos os campos!');
            return;
        }
        signUp(nome, email, senha);
    }

    return(
        <Background>
            <Container
            behavior={Platform.OS === 'ios' ? 'padding' : ''}
            enable
            >
                <AreaInput>
                    <Input
                    placeholder='Nome..'
                    value={nome}
                    onChangeText={(texto)=>setNome(texto)}
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                    placeholder='Email..'
                    value={email}
                    onChangeText={(texto)=>setEmail(texto)}
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                    placeholder='Senha..'
                    value={senha}
                    onChangeText={(texto)=>setSenha(texto)}
                    secureTextEntry={true}
                    />
                </AreaInput>

                <SubmitButton onPress={handleSignUp}>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={18} color='#252525'/>
                        ) : (
                            <SubmitText>Cadastrar</SubmitText>
                        )
                    }
                </SubmitButton>
            </Container>
        </Background>
    )
}
