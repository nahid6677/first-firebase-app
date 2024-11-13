
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTHKza2fnspYjU1TDKWeE7I2UernEJMwU",
  authDomain: "my-firebase-2-3729b.firebaseapp.com",
  projectId: "my-firebase-2-3729b",
  storageBucket: "my-firebase-2-3729b.firebasestorage.app",
  messagingSenderId: "1028537319802",
  appId: "1:1028537319802:web:d5c779ebca860d5c3016c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
