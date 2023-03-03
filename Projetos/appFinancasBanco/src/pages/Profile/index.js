import React, { useContext } from "react";
import Header from "../../components/header";
import { AuthContext } from "../../contexts/auth";
import { useNavigation } from "@react-navigation/native";
import {
    Container,
    Message,
    Name,
    NewLink,
    NewText,
    LogoutButtom,
    LogoutText,
    
} from './style';

export default function Profile() {

    const { signOut, user } = useContext(AuthContext);
    const navigation = useNavigation();

    return(
        <Container>
            <Header
            title='Meu perfil'
            />

            <Message>Hey, bem vindo de volta :)</Message>
            
            <Name
            numberOfLines={1}
            >
                {user && user.name}
            </Name>

            <NewLink onPress={() => navigation.navigate('Registrar')}>
                <NewText>Fazer registro</NewText>
            </NewLink>

            <LogoutButtom onPress={() => signOut()}>
                <LogoutText>Sair</LogoutText>
            </LogoutButtom>

        </Container>
    )
}