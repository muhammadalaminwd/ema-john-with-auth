// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFWQW4uv33wE2bwEspZJxvI7r40ryVIM8",
  authDomain: "ema-john-simple-4a2d7.firebaseapp.com",
  projectId: "ema-john-simple-4a2d7",
  storageBucket: "ema-john-simple-4a2d7.appspot.com",
  messagingSenderId: "355315824206",
  appId: "1:355315824206:web:5e9d93985acb1da9e0f51f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
