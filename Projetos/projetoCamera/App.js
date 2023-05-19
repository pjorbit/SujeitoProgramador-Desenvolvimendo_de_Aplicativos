import React, { useState } from "react";
import { 
  View, 
  Text, 
  StatusBar, 
  StyleSheet, 
  LogBox, 
  TouchableOpacity, 
  Modal, 
  Alert, 
  Image, 
  PermissionsAndroid,
  Platform
} from 'react-native';
import { RNCamera } from "react-native-camera";
import CameraRoll from '@react-native-camera-roll/camera-roll';

LogBox.ignoreLogs(['ViewPropTypes will be removed']);

export default function App() {
  const [type, setType] = useState(RNCamera.Constants.Type.back);
  const [open, setOpen] = useState(false);
  const [capturedPhoto, setCapturedPhoto] = useState(null);

  async function takePicture(camera) {
    //tira a foto
    const option = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(option);
    setCapturedPhoto(data.uri);
    setOpen(true);

    //salva a imagem no album
    savePicture(data.uri);
    console.log('Imagem salva aqui: ' + data.uri)
  }

  async function hasAndroidPermission() {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
    const hasPermission = await PermissionsAndroid.check(permission);
    if(hasPermission) {
      return true;
    }
    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  }

  async function savePicture(data) {
    if(Platform.OS === 'android' && !(await hasAndroidPermission())){
      return;
    }

    CameraRoll.save(data, 'photo')
    .then((res) => {
      console.log('SALVO COM SUCESSO: ' + res)
    })
    .catch((err)=>{
      console.log('ERROR AO SALVAR: ' + err)
    })
  }

  function toggleCam() {
    setType(type === RNCamera.Constants.Type.back ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back)
  }

  return(
    <View style={style.container}>

      <StatusBar hidden={true}/>

      <RNCamera
      style={style.preview}
      type={type}
      flashMode={RNCamera.Constants.FlashMode.auto}
      androidCameraPermissionOptions={{
        title: 'Permissão para usar a câmera.',
        message: 'Para a plena funcionalidade do app, por favor permita o acesso a câmera do aparelho',
        buttonPositive: 'Permitir',
        buttonNegative: 'Negar'
      }}
      >
        {({ camera, status, recordAndroidPermissionStatus }) => {
          if(status !== 'READY') {
            return <View/>
          }
          return(
            <View style={style.containerBtn}>

              <TouchableOpacity 
              style={style.btnSwitchCamera}
              onPress={toggleCam}
              >
                <Image
                source={require('./src/assets/icons8-switch-camera-96.png')}
                resizeMode="contain"
                style={{ width: 60, height: 60 }}
                />
              </TouchableOpacity>

              <View style={style.btnTakePictureArea}>
                <TouchableOpacity
                style={style.captureBtn}
                onPress={()=>takePicture(camera)}
                >
                </TouchableOpacity>
              </View>

              <TouchableOpacity
              style={style.albumBtn}
              onPress={()=>{}}
              >
                <Text>Abrir álbum</Text>
              </TouchableOpacity>

            </View>
          )
        }}
      </RNCamera>

      {capturedPhoto && 
        <Modal animationType="slide" transparent={false} visible={open}>
          
          <View style={{flex: 1, margin: 20, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity
            style={{ margin: 10 }}
            onPress={()=>setOpen(false)}
            >
              <Text style={{ fontSize: 16 }}>Fechar modal</Text>
            </TouchableOpacity>

            <Image
            style={{ width: 350, height: 400, borderRadius: 10 }}
            source={{uri: capturedPhoto}}
            resizeMode="contain"
            />
          </View>
        </Modal>
      }


    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
  },
  preview:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  containerBtn:{
    marginBottom: 35,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 90,
    width: '100%',
  },
  btnTakePictureArea:{
    borderWidth: 2,
    borderColor: '#F2F2F2',
    height: 90,
    width: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  captureBtn:{
    height: 75,
    width: 75,
    backgroundColor: '#fff',
    borderRadius: 50
  },
  albumBtn:{
    borderWidth: 1,
  },
  btnSwitchCamera:{
    alignItems: 'center',
    justifyContent: 'center'
  }
})