// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeqKg1RhEkDhlULfR5ieuI9Yn38qM-iuc",
  authDomain: "skyleap-50aa6.firebaseapp.com",
  projectId: "skyleap-50aa6",
  storageBucket: "skyleap-50aa6.appspot.com",
  messagingSenderId: "918781515741",
  appId: "1:918781515741:web:888f802ed8c01c1750c834",
  measurementId: "G-5ZZLJF5XCR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export {auth, provider}

