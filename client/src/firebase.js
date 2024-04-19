// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-b2bc2.firebaseapp.com",
  projectId: "mern-blog-b2bc2",
  storageBucket: "mern-blog-b2bc2.appspot.com",
  messagingSenderId: "552278864417",
  appId: "1:552278864417:web:83efecd9f4c6d5a31ba960"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


