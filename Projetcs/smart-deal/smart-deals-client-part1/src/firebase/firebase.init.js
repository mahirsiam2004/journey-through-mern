// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXpgBYaHGVdJTZdegf6b2KlheNkl-BdCw",
  authDomain: "smart-deal-mern.firebaseapp.com",
  projectId: "smart-deal-mern",
  storageBucket: "smart-deal-mern.firebasestorage.app",
  messagingSenderId: "99775456341",
  appId: "1:99775456341:web:ecfc91f0b86da33a9020dc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
