// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCMPTLT1mf7yElBjoep8FmewBQhBcwrEs",
  authDomain: "membership-project-938e5.firebaseapp.com",
  projectId: "membership-project-938e5",
  storageBucket: "membership-project-938e5.firebasestorage.app",
  messagingSenderId: "1052437381818",
  appId: "1:1052437381818:web:b2afc5a964229bf07af883",
  measurementId: "G-GGG462VM50",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore

export { db }; // Export Firestore
