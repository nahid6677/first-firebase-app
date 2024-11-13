// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg1D5YYzLQailH3JfHB2d4FcXCMFo23xk",
  authDomain: "my-simple-firewbase.firebaseapp.com",
  projectId: "my-simple-firewbase",
  storageBucket: "my-simple-firewbase.firebasestorage.app",
  messagingSenderId: "768602366308",
  appId: "1:768602366308:web:25a9e36691ab83dd6cda71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;