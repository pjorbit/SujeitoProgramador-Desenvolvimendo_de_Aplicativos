import { View, Text, StyleSheet } from 'react-native';

export default function ListTotal({ total }) {
    return(
        <View style={style.container}>
            <Text style={style.text}>Total: R${total}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#66CDD9',
        height: 50,
        padding: 10,
        borderRadius: 10
    },
    text:{
        fontSize: 22,
        color: '#101010',
        fontWeight: 'bold'
    }
})