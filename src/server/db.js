// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import firebase from "firebase/compat/app";
// // Required for side-effects
// import "firebase/firestore";
// import { collection, addDoc } from "firebase/firestore";
// import { getFirestore } from "firebase/firestore";
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaq4FhTRygyVb8fDLluba3_v-9JfIb9_4",
  authDomain: "ctbee-59eaf.firebaseapp.com",
  projectId: "ctbee-59eaf",
  storageBucket: "ctbee-59eaf.appspot.com",
  messagingSenderId: "746605886775",
  appId: "1:746605886775:web:bb60ca6dc709b6bea92eb2",
  measurementId: "G-XTW9D3R1M8"
};

// Initialize Firebase
const db = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const db = getFirestore(app);

// const addNewDoc = async x => {
//   const docRef = await addDoc(collection(db, "sold"), {
//     ID: x
//   });
// }

module.exports = db;