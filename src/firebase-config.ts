// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



const firebaseConfig = {
  apiKey: "AIzaSyD_62veHNSFiJg2mVw0C7N5OLzJwoEGAXk",
  authDomain: "jeniasproject-e7214.firebaseapp.com",
  projectId: "jeniasproject-e7214",
  storageBucket: "jeniasproject-e7214.appspot.com",
  messagingSenderId: "310976098950",
  appId: "1:310976098950:web:d02c928bc0cd7e717d9707",
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { auth, db };


