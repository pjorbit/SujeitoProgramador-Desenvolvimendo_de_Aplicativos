import { useState, useContext } from "react";
import { View, Text, StyleSheet, Button, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';
import Product from "../../components/Product";
import { CartContext } from '../../context/CartContext';

export default function Home() {
    const navigation = useNavigation();
    const { cart, addCartItem } = useContext(CartContext);

    const [products, setProducts] = useState([
        {
            id: '1',
            name: 'Coca-Cola',
            price: 19.90,
            image: require('../../assets/refrigerante.jpg')
        },

        {
            id: '2',
            name: 'Chocolate',
            price: 6.50,
            image: require('../../assets/chocolate.jpg')
        },

        {
            id: '3',
            name: 'Queijo 500g',
            price: 15,
            image: require('../../assets/queijo.jpg')
        },

        {
            id: '4',
            name: 'Batata frita',
            price: 23.90,
            image: require('../../assets/fritas.jpg')
        },

        {
            id: '5',
            name: 'Hamburger',
            price: 6.00,
            image: require('../../assets/hamburger.jpg')
        },
    ])

    function handleAddCart(item) {
        addCartItem(item)
    }

    return(
        <SafeAreaView style={style.container}>
            <View style={style.cartContent}>

                <Text style={style.textContent}>Lista de Produtos</Text>

                <TouchableOpacity style={style.cartButton} onPress={()=>navigation.navigate('Cart')}>
                    {cart.length >= 1 && (
                        <View style={style.dotArea}>
                            <Text style={style.dotText}>{cart?.length}</Text>
                        </View>
                    )}
                    <Feather name="shopping-cart" size={35} color='#101010'/>
                </TouchableOpacity>

            </View>
            <FlatList
            style={style.list}
            data={products}
            keyExtractor={(item)=>String(item.id)}
            renderItem={({item})=><Product data={item} addToCart={()=>handleAddCart(item)}/>}
            numColumns={2}
            />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        paddingStart: 10,
        paddingEnd: 10,
        backgroundColor: '#edf1fa'
    },
    cartContent:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10
    },
    textContent:{
        fontSize: 25,
        fontWeight: 'bold'
    },
    cartButton:{
        backgroundColor: '#fff',
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    dotArea:{
        backgroundColor: '#4843D9',
        width: 20,
        height: 20,
        borderRadius: 50,
        alignItems: 'center',
        position: 'absolute',
        zIndex: 99,
        marginTop: 10
    },
    dotText:{
        fontWeight: 'bold',
        color: '#fff'
    },
    list:{

    }
})