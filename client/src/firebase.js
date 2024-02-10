// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-8431c.firebaseapp.com",
    projectId: "mern-estate-8431c",
    storageBucket: "mern-estate-8431c.appspot.com",
    messagingSenderId: "200722178687",
    appId: "1:200722178687:web:895dc1047b2cab5a55954a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);