import React from "react";
import { View, Text } from "react-native";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import PgInicial from "../Pages/PgInicial";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return(
        <Stack.Navigator>

            <Stack.Screen
            name="PgInicial"
            component={PgInicial}
            options={{
                headerShown: false
            }}
            />

            <Stack.Screen
            name="Home"
            component={Home}
            options={{
                headerShown: false
            }}
            />

            <Stack.Screen
            name="Cart"
            component={Cart}
            options={{
                headerTitle: 'Meu carrinho',
                headerShown: false
            }}
            />
        </Stack.Navigator>
    )
}