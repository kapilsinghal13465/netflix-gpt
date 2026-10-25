// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKfwIxmBxNP_1_I4ltJJhrf5Y3mkCEAL4",
  authDomain: "netflixgpt-86870.firebaseapp.com",
  projectId: "netflixgpt-86870",
  storageBucket: "netflixgpt-86870.firebasestorage.app",
  messagingSenderId: "719482268756",
  appId: "1:719482268756:web:4fbf60e6f62c17cad6d1c1",
  measurementId: "G-37FDZJ2GRM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);