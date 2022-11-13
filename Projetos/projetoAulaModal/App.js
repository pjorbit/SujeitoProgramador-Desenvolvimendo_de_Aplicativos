import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, Modal } from 'react-native'

import Detalhes from './src/detalhes';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  function abriModal() {
    setModalVisible(true)
  }

  function fecharModal() {
    setModalVisible(false)
  }

  return(
    <View style={styles.container}>
      <Button title='Acessar' onPress={ abriModal } />

      <Modal transparent={true} animationType={'slide'} visible={modalVisible}>
        <Detalhes fechar={ fecharModal }/>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})