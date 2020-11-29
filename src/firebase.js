// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBCCGpbeBgIFZJ0HCkR_ONyCnb4d9eNR_Y",
  authDomain: "clone-d382a.firebaseapp.com",
  databaseURL: "https://clone-d382a.firebaseio.com",
  projectId: "clone-d382a",
  storageBucket: "clone-d382a.appspot.com",
  messagingSenderId: "313750526368",
  appId: "1:313750526368:web:d9d6bd4b4b62235f0c6cc5",
  measurementId: "G-Y2XRTTTW13",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
