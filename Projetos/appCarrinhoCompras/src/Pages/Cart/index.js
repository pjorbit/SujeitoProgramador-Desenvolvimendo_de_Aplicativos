import { useContext } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';
import { CartContext } from '../../context/CartContext';
import CartItem from "../../components/CartItem";
import ListEmpty from "../../components/ListEmpty";
import ListTotal from "../../components/ListTotal";

export default function Cart() {

    const { cart, addCartItem, removeCartItem, total } = useContext(CartContext);
    const navigation = useNavigation();

    return(
        <View style={style.container}>
            <View style={style.containerBtnVoltar}>
                <TouchableOpacity 
                style={style.areaBtnVoltar}
                onPress={()=>navigation.goBack()}
                >
                    <Feather
                    name="chevron-left"
                    size={35}
                    color='#101010'
                    />
                </TouchableOpacity>
            </View>
            <FlatList 
            style={style.containerProdutos}
            data={cart}
            keyExtractor={(item) => String(item.id)}
            ListEmptyComponent={() => <ListEmpty/>}
            renderItem={ ({item}) => (
                <CartItem data={item} addAmount={() => addCartItem(item)} removeAmount={() => removeCartItem(item)}/>
            )}
            ListFooterComponent={() => <ListTotal total={total}/>}
            >
            </FlatList>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        paddingStart: 10,
        paddingEnd: 10,
        backgroundColor: '#edf1fa',
    },
    containerBtnVoltar:{
        height: 80,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    areaBtnVoltar:{
        backgroundColor: '#fff',
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginRight: 10
    },
    areaBtnText:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    containerProdutos:{
        flex: 1,
        padding: 15
    }
})