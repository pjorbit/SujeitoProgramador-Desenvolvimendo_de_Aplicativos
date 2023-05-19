import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

export default function ListEmpty() {
    return(
        <View style={style.container}>
            <LottieView
            source={require('../../assets/101299-sad-emotion.json')}
            autoPlay={true}
            loop={true}
            style={{ width: 250, height: 250 }}
            resizeMode="cover"
            />
            <Text style={style.text}>Não há nada no carrinho</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold'
    }
})