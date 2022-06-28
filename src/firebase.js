// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHu0KeYDJsUchgZBsPIv33PlRkEDL3IUY",
  authDomain: "diamonds-in-the-rough.firebaseapp.com",
  projectId: "diamonds-in-the-rough",
  storageBucket: "diamonds-in-the-rough.appspot.com",
  messagingSenderId: "1080048226856",
  appId: "1:1080048226856:web:fa528b8255149ff8695b1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };