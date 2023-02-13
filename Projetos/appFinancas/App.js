import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes/Index';

export default function App() {
  return(
    <NavigationContainer>
      <StatusBar backgroundColor='#f0f4ff' barStyle='dark-content'/>
      <Routes/>
    </NavigationContainer>
  )
}