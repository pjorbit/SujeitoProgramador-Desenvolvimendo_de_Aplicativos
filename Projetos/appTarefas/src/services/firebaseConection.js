import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyC3CJcAMUGlMnObS2K65LaV6XTMLvyFXdQ",
    authDomain: "apptarefas-9c3e7.firebaseapp.com",
    projectId: "apptarefas-9c3e7",
    storageBucket: "apptarefas-9c3e7.appspot.com",
    messagingSenderId: "365850137545",
    appId: "1:365850137545:web:9a83417ef52eccd5b38e18"
};

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase;