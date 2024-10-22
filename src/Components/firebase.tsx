// Import Firebase functions from the modular SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8hMxysdKWTHZG7jkTKLv8h_oguO2KpvE",
  authDomain: "linkedin-clone-a28e8.firebaseapp.com",
  projectId: "linkedin-clone-a28e8",
  storageBucket: "linkedin-clone-a28e8.appspot.com",
  messagingSenderId: "989122189707",
  appId: "1:989122189707:web:ab2edc244deaf1d1f9f78e",
  measurementId: "G-275MD145V0",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore and Auth services
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
