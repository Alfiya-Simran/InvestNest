// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA7Ank7w2AkaulNS5UsXrf6n6GuhlfXW4w",
    authDomain: "investnest-c8a74.firebaseapp.com",
    projectId: "investnest-c8a74",
    storageBucket: "investnest-c8a74.firebasestorage.app",
    messagingSenderId: "197664489956",
    appId: "1:197664489956:web:de01e5b37f2b6a5c0b87f1",
    measurementId: "G-WQC9KZ0JJP"
  };
  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
