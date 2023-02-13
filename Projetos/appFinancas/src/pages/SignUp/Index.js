import React, { useContext } from 'react';
import { Alert } from 'react-native';

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

    const { user } = useContext(AuthContext);

    function testandoContext() {
        Alert.alert('Deu certo', `O usuário ${user.nome} tem ${user.idade} anos!`)
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
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                    placeholder='Email..'
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                    placeholder='Senha..'
                    />
                </AreaInput>

                <SubmitButton onPress={testandoContext}>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButton>
            </Container>
        </Background>
    )
}
