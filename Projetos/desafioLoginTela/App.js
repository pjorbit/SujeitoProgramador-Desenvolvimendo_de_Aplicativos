import { StyleSheet } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(true);

import Home from './src/Screens/Home';
import Login from './src/Screens/Login';
import Logout from './src/Screens/Logout';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name='Home'
        component={Home}
        options={{
          headerShown:false
        }}
        />

        <Stack.Screen
        name='Login'
        component={Login}
        options={{
          headerShown:false
        }}
        />

        <Stack.Screen
        name='Logout'
        component={Logout}
        options={{
          headerShown:false
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({

})