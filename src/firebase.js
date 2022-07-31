import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-G-DnYJEAHXkkwFIF2G8Y-oYkSnn0JyU",
  authDomain: "challenge-d2cdb.firebaseapp.com",
  projectId: "challenge-d2cdb",
  storageBucket: "challenge-d2cdb.appspot.com",
  messagingSenderId: "678653060281",
  appId: "1:678653060281:web:e7da069f5c3fece2712768",
  measurementId: "G-JR451V4TQN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
