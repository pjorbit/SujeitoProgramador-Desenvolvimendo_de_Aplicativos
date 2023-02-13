import { Alert, Text, TouchableOpacity } from 'react-native';
import { Container, Titulo, AreaBtn, AreaText } from './src/Styles/StyleComponents'

export default function App() {


  function chamarAlerta(){
    Alert.alert('Alerda bombooou', 'Deu tudo certo grazadeus ;)')
  }

  return (
    <Container>
      <Titulo>Bem vindo Rafael!</Titulo>
      <AreaBtn onPress={chamarAlerta}>
        <AreaText>Entrar</AreaText>
      </AreaBtn>
    </Container>
  );
}
