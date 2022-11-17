import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../Pages/Home/Index";
import Detalhes from "../Pages/Detalhes/Index";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Home"
            component={Home}
            />

            <Stack.Screen
            name="Detalhes"
            component={Detalhes}
            />
        </Stack.Navigator>
    )
}