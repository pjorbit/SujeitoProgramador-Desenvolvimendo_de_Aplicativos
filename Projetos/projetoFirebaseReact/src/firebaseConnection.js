import firebase from "firebase/app";
import 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyBJuL3BNPgBWeCXlStZKn-8H1cAYvuafAQ",
  authDomain: "sujeitoprojetorealtime.firebaseapp.com",
  projectId: "sujeitoprojetorealtime",
  storageBucket: "sujeitoprojetorealtime.appspot.com",
  messagingSenderId: "96128555983",
  appId: "1:96128555983:web:e0df95b4bb5f86a18c10ba",
  measurementId: "G-F6B2CMYC1P"
};

// Initialize Firebase
if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;