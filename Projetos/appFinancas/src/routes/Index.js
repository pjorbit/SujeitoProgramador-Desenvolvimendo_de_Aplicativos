import React, { useContext } from "react";
import { View, ActivityIndicator, Text } from 'react-native';
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { AuthContext } from "../contexts/auth";

function Routes() {
    const { signed } = useContext(AuthContext);
    const loading = false;

    return(
        signed ? <AppRoutes/> : <AuthRoutes/>
    )
}

export default Routes;