import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";

import Detalhes from "../modal/Index";

export default function FilmesCon({data}) {

    const [visivel, setVisivel] = useState(false);

    return(
        <View>
            <View style={style.card}>
                <Text style={style.titulo}>{data.nome}</Text>
                <Image
                source={{uri:data.foto}}
                style={style.image}
                />
                <View style={style.areaBotao}>
                    <TouchableOpacity style={style.botao} onPress={()=>setVisivel(true)}>
                        <Text style={style.btnTexto}>Leia Mais</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal transparent={true} animationType="slide" visible={visivel}>
                <Detalhes filmes={data} voltar={()=>setVisivel(false)}/>
            </Modal>
        </View>
    )
}

const style = StyleSheet.create({
    card:{
        backgroundColor: '#f5f5f5',
        margin: 15,
        elevation: 2
    },
    titulo:{
        padding: 15,
        fontSize: 18,
        fontWeight: 'bold'
    },
    image:{
        height: 250,
        zIndex: 2
    },
    areaBotao:{
        alignItems: "flex-end",
        marginTop: -45,
        zIndex: 9
    },
    botao:{
        width: 100,
        backgroundColor: '#09a6ff',
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15
    },
    btnTexto:{
        textAlign: 'center',
        color: '#f5f5f5',
        fontSize: 15,
        fontWeight: 'bold'
    }
})