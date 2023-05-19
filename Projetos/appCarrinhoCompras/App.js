import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes';
import CartProvider from './src/context/CartContext';

export default function App() {
  return (
    <NavigationContainer>
      <CartProvider>

        <StatusBar
        backgroundColor='#edf1fa'
        barStyle='dark-content'
        />

        <Routes/>
        
      </CartProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edf1fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
