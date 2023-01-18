import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;

function App() {

  const [zero, setZero] = useState('00:00:00');
  const [comecar, setComecar] = useState('Iniciar');
  const [ultimo, setUltimo] = useState(null)

  function iniciar() {
    if(timer!==null) {
      //Para o timer
      clearInterval(timer)
      timer=null
      setComecar('Iniciar')
    } else {
      //Começa o timer
      timer = setInterval(() => {
        ss++
        if(ss==60) {
          ss=0
          mm++
        } else if(mm==60) {
          mm=0
          hh++
        }

        let formatar = 
        (hh < 10 ? '0'+hh : hh) + ':' + 
        (mm < 10 ? '0'+mm : mm) + ':' + 
        (ss < 10 ? '0'+ss : ss)
        setZero(formatar)
      }, 1000)
      setComecar('Parar')
    }
  }
  function limpar() {
    if(timer!==null) {
      clearInterval(timer)
      timer=null
    }
    setUltimo(zero)
    setZero('00:00:00')
    ss = 0;
    mm = 0;
    hh = 0;
    setComecar('Iniciar')
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('./src/crono.png')}
      />

      <Text style={styles.timer}>{zero}</Text>

      <View style={styles.botoes}>
        <TouchableOpacity style={styles.btn} onPress={iniciar}>
          <Text style={styles.btnTexto}>{comecar}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={limpar}>
          <Text style={styles.btnTexto}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.areaTempo}>
        <Text style={styles.areaTempoTexto}>
          {ultimo ? `Ultimo tempo: ${ultimo}` : ''}
        </Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#595959',
    alignItems: 'center',
    justifyContent: 'center'
  },
  timer:{
    fontSize: 50,
    fontWeight: 'bold',
    margin: 10,
    color: '#272756'
  },
  botoes:{
    flexDirection: 'row',
    height: 50,
  },
  btn:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    margin: 15,
    borderWidth: 2,
    borderColor: '#242424',
    borderRadius: 10
  },
  btnTexto:{
    textAlign: 'center',
    fontSize: 25,
    color: '#242424',
    fontWeight: 'bold'
  },
  areaTempo:{
    marginTop: 35,
  },
  areaTempoTexto:{
    fontStyle: 'italic',
    fontSize: 25,
    color: '#272756'
  }
})





export default App;