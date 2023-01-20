import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Home from "../pages/Home/Index";
import Detalhes from "../pages/Detalhes/Index";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Home"
            component={Home}
            options={{
                headerShown:false
            }}
            />

            <Stack.Screen
            name="Detalhes"
            component={Detalhes}
            />
        </Stack.Navigator>
    )
}