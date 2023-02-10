import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, FlatList, Alert, Keyboard } from 'react-native'
import React, { useState, useEffect, useRef } from 'react';
import Login from './src/components/Login/Index';
import TaskList from './src/components/TaskList/Index';
import firebase from './src/services/firebaseConection';
import Feather from 'react-native-vector-icons/Feather';

export default function App() {

  const [user, setUser] = useState(null);
  const [newtask, setNewTask] = useState('');
  const [task, setTasks] = useState([]);
  const [keyEdit, setKeyEdit] = useState('');
  const inputRef = useRef(null);

  useEffect(()=>{
    function getUser() {
      if(!user) {
        return;
      }
      firebase.database().ref('Tarefas').child(user).once('value', (snapshot)=>{
        setTasks([]);

        snapshot?.forEach((childItem)=>{
          let data = {
            key: childItem.key,
            nome: childItem.val().nome
          }
          setTasks(oldTasks=>[...oldTasks, data]);
        })
      })
    }
    getUser();

  }, [user])


  function handleDelete(key) {
    firebase.database().ref('Tarefas').child(user).child(key).remove()
    .then(()=>{
      const findTasks = task.filter( item => item.key !== key );
      setTasks(findTasks);
    })
  }

  function handleEdit(data) {
    setKeyEdit(data.key);
    setNewTask(data.nome);
    inputRef.current.focus();
  }

  function cancelEdit() {
    setKeyEdit('');
    setNewTask('');
    Keyboard.dismiss();
  }

  function handleAdd() {
    if(newtask === '') {
      Alert.alert('Sinto muito', 'Sua tarefa não pode estar vazia')
      return;
    }

    if(keyEdit !== '') {
      firebase.database().ref('Tarefas').child(user).child(keyEdit).update({
        nome: newtask
      })
      .then(()=>{
        const taskIndex = task.findIndex(item => item.key === keyEdit);
        let taskClone = task;
        taskClone[taskIndex].nome = newtask;
        setTasks([...taskClone])
      })
      Keyboard.dismiss();
      setNewTask('');
      setKeyEdit('');
      return;
    }

    let tarefas = firebase.database().ref('Tarefas').child(user);
    let chave = tarefas.push().key;
    tarefas.child(chave).set({
      nome: newtask
    })
    .then(()=>{
      const data = {
        key: chave,
        nome: newtask
      };
      setTasks(oldTasks=>[...oldTasks, data])
    })
    Keyboard.dismiss()
    setNewTask('')
  }

  if(!user) {
    return <Login changeStatus={ (user)=>setUser(user) }/>
  } else {
    return (
      <SafeAreaView style={style.container}>

        {keyEdit.length > 0 && (
          <View style={{marginBottom: 5, flexDirection: 'row'}}>
            <TouchableOpacity
            style={{paddingRight: 5}}
            onPress={cancelEdit}
            >
              <Feather
              name='x-circle'
              color='#ff0000'
              size={20}
              />
            </TouchableOpacity>
            <Text style={{color: '#ff0000'}}>Você está editando uma tarefa!</Text>
          </View>
        )} 

        <View style={style.containerTask}>
          <TextInput
          placeholder='Qual sua próxima tarefa?'
          onChangeText={(text) => setNewTask(text)}
          value={newtask}
          style={style.input}
          ref={inputRef}
          />

          <TouchableOpacity
          style={style.btnArea}
          onPress={handleAdd}
          >
            <Text style={style.btnText}>+</Text>
          </TouchableOpacity>
        </View>

        <FlatList
        data={task}
        keyExtractor={item=>item.key}
        renderItem={({ item })=>(
          <TaskList data={item} deleteItem={handleDelete} editItem={handleEdit}/>
        )}
        />

      </SafeAreaView>
    )
  }
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: '#f2f6fc'
  },
  containerTask:{
    flexDirection: 'row'
  },
  input:{
    backgroundColor: '#fff',
    height: 45,
    flex: 1,
    borderWidth: 1,
    borderColor: '#252525',
    borderRadius: 8,
    padding: 10,
    fontSize: 15,
    marginBottom: 15
  },
  btnArea:{
    paddingHorizontal: 15,
    backgroundColor: '#252525',
    height: 45,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  btnText:{
    fontSize: 22,
    color: '#f9f9f9'
  }
})