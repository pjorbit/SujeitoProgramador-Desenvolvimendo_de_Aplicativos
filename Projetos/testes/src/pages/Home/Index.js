import React from "react";
import { View, Text, Button } from "react-native";

import { useNavigation } from "@react-navigation/native"

export default function Home() {

    const navigation = useNavigation();

    function navegaDetalhes() {
        navigation.navigate("Detalhes");
    }

    return(
        <View>
            <Text>É a homeeeeeeeee</Text>
            <Button title="Ir para detalhes" onPress={navegaDetalhes}/>
            <Button title="Ir para contatos" onPress={()=>navigation.navigate("Contato")}/>
            <Button title="Abrir Drawer" onPress={()=>navigation.openDrawer()}/>
        </View>
    )
}