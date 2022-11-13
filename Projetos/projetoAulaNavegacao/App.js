import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./src/pages/Home/Index";
import Sobre from "./src/pages/Sobre/Index";

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          title: 'Página Inicial',
          headerStyle:{
            backgroundColor: '#393939'
          },
          headerTintColor: '#eee',
          headerShown: false,
        }}
        />
        <Stack.Screen 
        name="Sobre" 
        component={Sobre} 
        options={{
          title: 'Página Sobre Nós'
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}