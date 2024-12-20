import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCMPTLT1mf7yElBjoep8FmewBQhBcwrEs",
  authDomain: "membership-project-938e5.firebaseapp.com",
  projectId: "membership-project-938e5",
  storageBucket: "membership-project-938e5.appspot.com",
  messagingSenderId: "1052437381818",
  appId: "1:1052437381818:web:b2afc5a964229bf07af883",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };