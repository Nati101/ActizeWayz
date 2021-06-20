import firebase from "firebase";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBX4hYKtxtdgJxMmROkIh-9bH6w59p0UzE",
  authDomain: "activewayz.firebaseapp.com",
  projectId: "activewayz",
  storageBucket: "activewayz.appspot.com",
  messagingSenderId: "744251517366",
  appId: "1:744251517366:web:7dcf36f9d1a766f3e1b917",
  measurementId: "G-HFKHEZ330N",
});

var db = firebaseApp.firestore();

export { db };
