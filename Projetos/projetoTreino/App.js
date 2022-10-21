import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity, TextInput, ScrollView, Image } from "react-native";


function App() {

  //campos input
  const [nome, setNome] = useState('');
  const [texto1, setTexto1] = useState('');
  const [idade, setIdade] = useState('');
  const [texto2, setTexto2] = useState('');

  //picker
  const [contaSelecionada, setContaSelecionado] = useState(0);
  const [conta, setConta] = useState([
    {key:1, nome:'Conta Corrente'},
    {key:2, nome:'Conta Salário'},
    {key:2, nome:'Poupança'}
  ])
  

  //slider
  const [sliderValor, setSliderValor] = useState(0)

  //switch
  const [estudante, setEstudante] = useState(false)

  function enviarDados() {
    if(texto1===''||texto2==='') {
      alert('Há dados faltando')
      return
    }
    setNome(texto1)
    setIdade(texto2)
  }


  let contas = conta.map((value, key)=>{
    return <Picker.Item key={key} value={key} label={value.nome} />
  })

  return(
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titulo}>Banco Sujeito Programador</Text>
        <View style={styles.form}>
          
          {/*CAMPOS IMPUT*/}
          <View style={styles.areaDados}>
            <TextInput placeholder="Entre com seu nome.." 
            placeholderTextColor={'#0F0F0F'} style={styles.areaDadosInput}
            onChangeText={(texto1) => setTexto1(texto1)}
            />
            <TextInput placeholder="Entre com sua idade.." 
            placeholderTextColor={'#0F0F0F'} style={styles.areaDadosInput}
            onChangeText={(texto2) => setTexto2(texto2)}
            />
          </View>

          {/*CAMPO PICKER*/}
          <View style={styles.areaConta}>
            <Text style={styles.contaTexto}>Escolha o tipo de conta:</Text>
            <Picker selectedValue={contaSelecionada} 
            onValueChange={(itemValue, itemIndex)=>setContaSelecionado(itemValue)}>
              {contas}
            </Picker>
          </View>

          {/*CAMPO SLIDER*/}
          <View style={styles.areaSlider}>
            <Slider minimumValue={200} 
              maximumValue={1300} 
              thumbTintColor={'#DE2AFA'} 
              minimumTrackTintColor={'#62136E'}
              value={sliderValor}
              onValueChange={(valorLimite)=>setSliderValor(valorLimite)}  
            />
            <Text style={styles.sliderTexto}>Defina seu limite:R${sliderValor.toFixed(2)}</Text>
          </View>

          {/*CAMPO SWITCH*/}
          <View style={styles.areaEstudante}>
            <Text style={styles.estudanteTexto}>Você é um estudante?</Text>
            <Switch
              value={estudante}
              onValueChange={(status)=>setEstudante(status)}
            />
          </View>

          {/*BOTÃO*/}
          <TouchableOpacity style={styles.btnArea} onPress={()=>enviarDados()}>
            <View style={styles.btn}>
              <Text style={styles.btnTexto}>Entrar</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/*CARD RESULTADOS*/}
        <View style={styles.cardArea}>
          <View style={styles.cardAreaDados}>
            <Image
              source={require('./pngUser.png')}
              style={styles.cardImage}
            />
            <Text style={styles.userName}>{nome}</Text>
          </View>
          <View style={styles.cardDados}>
            <Text style={styles.dados}>Idade: {idade}</Text>
            <Text style={styles.dados}>Conta: {conta[contaSelecionada].nome}</Text>
            <Text style={styles.dados}>Limite: {`R$${sliderValor.toFixed(2)}`}</Text>
            <Text style={styles.dados}>Estudante: {estudante ? 'Sim' : 'Não'}</Text>
          </View>
        </View>


      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 40
  },
  titulo:{
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10
  },
  form:{
    height: 450,
    justifyContent: 'space-evenly',
    margin: 5,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#841994',
  },
  areaDados:{
    height:150,
    justifyContent: 'center',
  },
  areaDadosInput:{
    height:'30%',
    fontSize:16,
    padding: 5,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#62136E',
  },
  areaConta:{
    height: 70,
    marginTop: 10,
    
  },
  contaTexto:{
    fontSize: 16,
    marginLeft: 5,
  },
  areaSlider:{
    height:50,
    marginTop: 10
  },
  sliderTexto:{
    fontSize: 16,
    marginLeft: 5
  },
  areaEstudante:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    height: 50
  },
  estudanteTexto:{
    fontSize: 16,
    marginLeft: 5,
    marginRight: 15
  },
  btnArea:{
    marginTop:10,
    height:50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn:{
    alignContent: 'center',
    justifyContent: 'center',
    flex:1,
    width: 150,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#62136E',
    backgroundColor: '#DE2AFA',
  },
  btnTexto:{
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  cardArea:{
    justifyContent: 'center',
    height:250,
    margin: 20,
    borderWidth: 2,
    borderColor: '#121212',
    borderRadius: 15,
    backgroundColor: '#B12268'
  },
  cardAreaDados:{
    height:120,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  cardImage:{
    width:100,
    height: 100,
  },
  userName:{
    fontSize: 20,
    fontWeight: '700'
  },
  cardDados:{
    width: 200,
    margin: 10
  },
  dados:{
    fontSize: 20
  }
})



export default App;