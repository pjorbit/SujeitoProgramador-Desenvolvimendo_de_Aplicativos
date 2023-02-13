import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../pages/SignIn/Index";
import SignUp from "../pages/SignUp/Index";

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {

    return(
        <AuthStack.Navigator>
            <AuthStack.Screen
            name="SignIn"
            component={SignIn}
            options={{
                headerShown: false
            }}
            />
            
            <AuthStack.Screen
            name="SignUp"
            component={SignUp}
            options={{
                headerStyle:{
                    backgroundColor: '#3b3bff',
                    borderBottomWidth: 1,
                    borderBottomColor: '#00b94a'
                },
                headerTintColor: '#fff',
                headerTitle: 'Voltar',
                headerBackTitleVisible: false
            }}
            />
        </AuthStack.Navigator>
    )

}

export default AuthRoutes;