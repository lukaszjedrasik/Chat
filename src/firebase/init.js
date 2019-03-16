import firebase from "firebase/app";
import firestore from "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAZAVWTpliBtPux4I7pdboaYXlM5tf1guM",
  authDomain: "chat-91d10.firebaseapp.com",
  databaseURL: "https://chat-91d10.firebaseio.com",
  projectId: "chat-91d10",
  storageBucket: "",
  messagingSenderId: "135867949744"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
