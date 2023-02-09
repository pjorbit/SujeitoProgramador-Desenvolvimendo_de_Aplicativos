import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import firebase from '../Firebase/FirebaseConnection';
import Login from './Login';

const backGround2 = '../assets/281564.jpg';

const TelaLogin = () => {

    const navigation = useNavigation();

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    async function entrar() {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      .then((value)=>{
        Alert.alert('Seja bem vindo ' + value.user.email)
        navigation.navigate(Login);
      })
      .catch(()=>{
        Alert.alert('Ops.. algo deu errado :(')
      })
      setEmail('');
      setPassword('');
    }

    return (
        <View style={{flex: 1}}>
        <ImageBackground style={styles.container} source={require(backGround2)}>
            <View
            style={ styles.viewBorrada }
            >
            <View style={styles.viewInfo}>

                <Text style={styles.titulo}>Login</Text>
                <View style={styles.areaInput}>
                <Text style={styles.inputText}>Email</Text>
                <TextInput
                placeholder='fulano@gmail.com'
                placeholderTextColor={'#292929'}
                style={styles.input}
                onChangeText={(texto)=>setEmail(texto)}
                value={email}
                />
                </View>
                <View style={styles.areaInput}>
                <Text style={styles.inputText}>Senha</Text>
                <TextInput
                placeholder='*******'
                placeholderTextColor={'#292929'}
                style={styles.input}
                onChangeText={(texto)=>setPassword(texto)}
                value={password}
                />
                </View>
                <TouchableOpacity 
                style={styles.areaBtn}
                onPress={entrar}
                //() => navigation.navigate('Login')
                >
                <Text style={styles.btnText}>Entrar</Text>
                <Icon
                name='log-in'
                color='#1755A6'
                size={20}
                />
                </TouchableOpacity>

                <View style={styles.areaCriarConta}>
                <Text style={{color: '#f9f9f9',}}>Não possui uma conta?</Text>
                <TouchableOpacity
                style={styles.btnCriarConta}
                onPress={() => navigation.navigate('Logout')}
                >
                    <Text style={styles.btnTextCriar}>Criar conta</Text>
                    <Icon
                    name='arrow-up-right'
                    color='#1755A6'
                    size={20}
                    />
                </TouchableOpacity>
                </View>
            </View>
            </View>
        </ImageBackground>
        </View>
    )
}

export default TelaLogin

const styles = StyleSheet.create({
  container:{
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewBorrada:{
    height: 450,
    width: 320,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 15,
    padding: 5,
  },
  viewInfo:{
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    width: '100%'
  },
  titulo:{
    marginTop: 25,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#f9f9f9'
  },
  areaInput:{
    margin: 5,
    padding: 10,
    justifyContent: 'center',
    width: '100%',
    color: '#f9f9f9'
  },
  input:{
    borderWidth: 1,
    fontSize: 15,
    borderRadius: 8,
    paddingLeft: 12,
    borderColor: '#f9f9f9'
  },
  inputText:{
    fontSize: 18,
    fontWeight: '400',
    color: '#f9f9f9'
  },
  areaBtn:{
    backgroundColor: '#f9f9f9',
    elevation: 5,
    width: 120,
    height: 50,
    borderRadius: 12,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  areaCriarConta:{
    marginTop: 15,
    flexDirection: 'row'
  },
  areaBtnCriar:{
    flexDirection: 'row',
    margin: 20
  },
  btnTextCriar:{
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#252525'
  },
  btnText:{
    fontSize: 18,
    fontWeight: '900',
    color: '#252525'
  },
  btnCriarConta:{
    flexDirection: 'row'
  }
})