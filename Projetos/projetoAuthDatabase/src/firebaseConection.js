import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBJuL3BNPgBWeCXlStZKn-8H1cAYvuafAQ",
    authDomain: "sujeitoprojetorealtime.firebaseapp.com",
    databaseURL: "https://sujeitoprojetorealtime-default-rtdb.firebaseio.com",
    projectId: "sujeitoprojetorealtime",
    storageBucket: "sujeitoprojetorealtime.appspot.com",
    messagingSenderId: "96128555983",
    appId: "1:96128555983:web:e0df95b4bb5f86a18c10ba",
    measurementId: "G-F6B2CMYC1P"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;