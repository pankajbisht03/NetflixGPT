// Then, initialise Firebase and begin using the SDKs for the products that you'd like to use.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQWQYmT57CP3wFI_tQhK63XMZND8QGhnU",
  authDomain: "netflixgpt-8e7e0.firebaseapp.com",
  projectId: "netflixgpt-8e7e0",
  storageBucket: "netflixgpt-8e7e0.firebasestorage.app",
  messagingSenderId: "524283715315",
  appId: "1:524283715315:web:2af60186c94241c742a186",
  measurementId: "G-063BX3VVG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);