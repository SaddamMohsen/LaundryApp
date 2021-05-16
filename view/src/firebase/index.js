/*import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrYGE9xC--eKglfTg66gk1N_ptHwIgWgc",
  authDomain: "test-app-1b6db.firebaseapp.com",
  projectId: "test-app-1b6db",
  storageBucket: "test-app-1b6db.appspot.com",
  messagingSenderId: "645128952452",
  appId: "1:645128952452:web:fd7be282295f3c12c9c0d1",
  measurementId: "G-7WTQ4Q1R9W",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;*/
import firebase from "firebase";
const config = {
  apiKey: "AIzaSyBrYGE9xC--eKglfTg66gk1N_ptHwIgWgc",
  authDomain: "test-app-1b6db.firebaseapp.com",
  databaseURL: "https://test-app-1b6db-default-rtdb.firebaseio.com"
};

firebase.initializeApp(config);

export const auth = firebase.auth;

