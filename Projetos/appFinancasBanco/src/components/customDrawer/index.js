import React, { useContext } from "react";
import { View, Text, Image } from 'react-native';
import { DrawerItemList, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { AuthContext } from "../../contexts/auth";

export default function CustomDrawer(props) {

    const { user, signOut } = useContext(AuthContext);

    return(
        <DrawerContentScrollView
        {...props}
        >
            <View 
            style={{ alignItems: 'center', justifyContent: 'center', margin: 15 }}
            >
                <Image
                source={require('../../assets/Logo.png')}
                style={{ maxWidth: 110, maxHeight: 110 }}
                resizeMode="contain"
                />

                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Bem-vindo</Text>

                <Text 
                style={{fontSize: 22, color: '#101010', fontWeight: 'bold'}}
                numberOfLines={1}
                >{user && user.name}</Text>

            </View>

            <DrawerItemList
            {...props}
            />

            <DrawerItem
            {...props}
            label='Sair do app'
            onPress={() => signOut()}
            />
        </DrawerContentScrollView>
    )
}