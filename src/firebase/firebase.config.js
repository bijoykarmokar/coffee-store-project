// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwr9WWLxAKIAmSo37Y3KY_PA6LLB9lhWo",
  authDomain: "coffee-store-app-d1d59.firebaseapp.com",
  projectId: "coffee-store-app-d1d59",
  storageBucket: "coffee-store-app-d1d59.firebasestorage.app",
  messagingSenderId: "924311462101",
  appId: "1:924311462101:web:1d0ccaa5f797152c06425c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);