import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from "react-native";

import api from "./src/services/api";
import FilmesCon from "./src/filmim/index";

export default function App() {

  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    async function loadFilmes(){
      const response = await api.get('r-api/?api=filmes');
      setFilmes(response.data);
      setLoading(false);
    }

    loadFilmes();
  }, []);

  if(loading) {
    return(
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <ActivityIndicator color='#09a6ff' size={45}/>
      </View>
    )
  } else {
    return(
      <View style={styles.container}>
        <FlatList
        style={styles.lista}
        keyExtractor={item=>String(item.id)}
        data={filmes}
        renderItem={({item})=> <FilmesCon data={item}/>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  lista:{
    flex:1,
  }
})