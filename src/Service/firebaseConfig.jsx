// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBc4MF69QQwFKrcrfLy7F-asHYXt1keo8",
  authDomain: "trip-ai-e5435.firebaseapp.com",
  projectId: "trip-ai-e5435",
  storageBucket: "trip-ai-e5435.firebasestorage.app",
  messagingSenderId: "281871197373",
  appId: "1:281871197373:web:15c993d1355de0c28183d4",
  measurementId: "G-Y8NMG7M2FY"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth =getAuth(app);