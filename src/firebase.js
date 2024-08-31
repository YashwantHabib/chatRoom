// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKKM40Y3oImZhJijn1O0X4KMwPJiINXz0",
  authDomain: "chatroom-42ac4.firebaseapp.com",
  projectId: "chatroom-42ac4",
  storageBucket: "chatroom-42ac4.appspot.com",
  messagingSenderId: "241548346360",
  appId: "1:241548346360:web:d4e9e6f286b40f54fe4c0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)