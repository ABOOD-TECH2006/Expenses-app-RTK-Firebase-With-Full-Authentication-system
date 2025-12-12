// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA_ffzH_PDcYR8otFtfjnCFUZmtaJmFCt0",
  authDomain: "expenses-rtk-app.firebaseapp.com",
  databaseURL: "https://expenses-rtk-app-default-rtdb.firebaseio.com",
  projectId: "expenses-rtk-app",
  storageBucket: "expenses-rtk-app.firebasestorage.app",
  messagingSenderId: "861833485334",
  appId: "1:861833485334:web:abefb5fb701cce92246937",
  measurementId: "G-QZJ6KJS5G3",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getDatabase(app);
