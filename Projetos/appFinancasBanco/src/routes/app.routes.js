import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../pages/Home';
import New from '../pages/New';
import Profile from '../pages/Profile';
import CustomDrawer from '../components/customDrawer';

const AppDrawer = createDrawerNavigator();

export default function AppRoutes() {
    return(
        <AppDrawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props}/>}
        screenOptions={{
            headerShown: false,
            drawerStyle:{
                backgroundColor: '#fff',
                paddingTop: 20
            },
            drawerActiveBackgroundColor: '#3b3bbf',
            drawerActiveTintColor: '#fff',
            drawerInactiveBackgroundColor: '#f0f2ff',
            drawerInactiveTintColor: '#292929'
        }}
        >
            <AppDrawer.Screen
            name='Home'
            component={Home}
            />

            <AppDrawer.Screen
            name='Registrar'
            component={New}
            />

            <AppDrawer.Screen
            name='Profile'
            component={Profile}
            />

        </AppDrawer.Navigator>
    )
}