import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function List(props) {

    function carregaLike(likeada) {
        return likeada ? require('../../assets/likeada.png') :
        require('../../assets/like.png')
    }

    function mostraLikes(likers) {
        if(likers===0) {
            return;
        }
        return(
            <Text style={style.likes}>{likers} {likers > 1 ? 'curtidas' : 'curtida'}</Text>
        )
    }

    return(
        <View>

            <View style={style.viewPerfil}>
                <Image
                source={{uri: props.data.imgperfil}}
                style={style.fotoPerfil}
                />
                <Text style={style.nomePerfil}> {props.data.nome} </Text>
            </View>

            <Image
            resizeMode="cover"
            source={{uri: props.data.imgPublicacao}}
            style={style.imgPublicacao}
            />

            <View style={style.areaBtn}>
                <TouchableOpacity>
                    <Image
                    source={carregaLike(props.data.likeada)}
                    style={style.iconeLike}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                    source={require('../../assets/comment.png')}
                    style={style.iconeLike}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                    source={require('../../assets/send.png')}
                    style={style.iconeLike}
                    />
                </TouchableOpacity>
            </View>

            {mostraLikes(props.data.likers)}

            <Text style={style.nomeRodape}>{props.data.nome}</Text>

            <Text style={style.descricao}>{props.data.descricao}</Text>

        </View>
    )
}

const style = StyleSheet.create({
    lista:{
        backgroundColor: '#ccc'
    },
    viewPerfil:{
        flexDirection: 'row',
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    fotoPerfil:{
        height: 50,
        width: 50,
        borderRadius: 25
    },
    nomePerfil:{
        paddingLeft: 10,
        fontSize: 18,
        color: '#121212'
    },
    imgPublicacao:{
        height: 300
    },
    areaBtn:{
        height: 40,
        padding: 5,
        flexDirection: 'row'
    },
    iconeLike:{
        height: 25,
        width: 25,
        margin: 5
    },
    likes:{
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 15
    },
    nomeRodape:{
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 15
    },
    descricao:{
        fontSize: 15,
        paddingLeft: 15,
        paddingBottom: 15
    }
})