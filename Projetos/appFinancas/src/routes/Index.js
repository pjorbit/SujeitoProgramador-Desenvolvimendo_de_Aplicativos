import React from "react";
import { View, ActivityIndicator, Text } from 'react-native';
import AuthRoutes from "./auth.routes";

function Routes() {
    const loading = false;
    const signed = false;

    return(
        signed ? <View><Text>deu errado</Text></View> : <AuthRoutes/>
    )
}

export default Routes;