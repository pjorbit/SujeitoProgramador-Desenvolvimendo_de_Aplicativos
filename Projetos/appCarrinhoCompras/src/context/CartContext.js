import React, { useState, useContext, createContext } from "react";

export const CartContext = createContext({});

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    function addCartItem(newItem) {
        //Checar se o item está no carrinho e então adicionar +1 ou não
        const itemIndex = cart.findIndex(item => item.id === newItem.id);

        if(itemIndex !== -1) {
            //Se entrou aqui, significa que já existe na lista então precisamos adicionar +1
            let cartList = cart;
            cartList[itemIndex].amount = cartList[itemIndex].amount+1;
            cartList[itemIndex].total = cartList[itemIndex].amount * cartList[itemIndex].price;
            setCart(cartList);
            totalResultCart(cartList);
            return;
        }

        //Adicionar ao carrinho
        let data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }
        setCart(products => [...products, data]);
        totalResultCart([...cart, data]);
    }

    function removeCartItem(product) {
        const indexItem = cart.findIndex(item => item.id === product.id);

        if(cart[indexItem]?.amount > 1) {
            let cartList = cart;

            cartList[indexItem].amount = cartList[indexItem].amount - 1;
            cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price;

            setCart(cartList);
            totalResultCart(cartList);
            return
        }

        const removeItem = cart.filter(item => item.id !== product.id);
        setCart(removeItem);
        totalResultCart(removeItem);
    }

    function totalResultCart(items) {
        let myCart = items;
        let result = myCart.reduce((acc, obj) => { return acc + obj.total }, 0);
        setTotal(result.toFixed(2));
    }

    return(
        <CartContext.Provider
        value={{ cart, addCartItem, removeCartItem, total }}
        >
            {children}
        </CartContext.Provider>
    )
}