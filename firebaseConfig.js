import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2yes-sxpN6qxO4rsLCgzR4dikj_vRwlU",
  authDomain: "palpitecompleto-5e8a3.firebaseapp.com",
  projectId: "palpitecompleto-5e8a3",
  storageBucket: "palpitecompleto-5e8a3.appspot.com",
  messagingSenderId: "67752883432",
  appId: "1:67752883432:web:0063e903d615bbe836855d",
  measurementId: "G-46331QQZRD",
};

// Initialize Firestore
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
