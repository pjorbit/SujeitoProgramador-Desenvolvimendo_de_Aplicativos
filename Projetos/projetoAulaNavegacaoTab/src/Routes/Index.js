import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feather from '@expo/vector-icons/Feather';

import StackRoutes from './StackRoutes';
import Home from '../Pages/Home/Index';
import Sobre from '../Pages/Sobre/Index';
import Contato from '../Pages/Contato/Index';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
      <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFF',
        tabBarStyle:{
          backgroundColor: '#292929',
          borderTopWidth: 0
        }
      }}
      >
        <Tab.Screen
        name='HomeStack'
        component={StackRoutes}
        options={{
          tabBarIcon: (( color,size=25 )=>{
            return <Feather name='home' color={color} size={size}/>
          })
        }}
        />

        <Tab.Screen
        name='Sobre'
        component={Sobre}
        options={{
          tabBarIcon: (( color,size=25 )=>{
            return <Feather name='file-text' color={color} size={size}/>
          })
        }}
        />

        <Tab.Screen
        name='Contato'
        component={Contato}
        options={{
          tabBarIcon: (( color,size=25 )=>{
            return <Feather name='phone-call' color={color} size={size}/>
          })
        }}
        />
      </Tab.Navigator>
  );
}
