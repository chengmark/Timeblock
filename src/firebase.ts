import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVMLMy8R1v6eTPX_QQgLFoI-7S8HvGkzI",
  authDomain: "ipms-aidms.firebaseapp.com",
  databaseURL: "https://ipms-aidms-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ipms-aidms",
  storageBucket: "ipms-aidms.appspot.com",
  messagingSenderId: "165151436500",
  appId: "1:165151436500:web:2275c801747ede1886d541",
  measurementId: "G-DY6C4V06E7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);