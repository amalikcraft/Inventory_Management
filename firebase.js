// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwVO5fyfmsnmCPgtItN1OsYN75SCdz-lE",
  authDomain: "inventory-management-6f3d2.firebaseapp.com",
  projectId: "inventory-management-6f3d2",
  storageBucket: "inventory-management-6f3d2.appspot.com",
  messagingSenderId: "511148909434",
  appId: "1:511148909434:web:4395412e55b946cccd6cc3",
  measurementId: "G-8DDTDR4V7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}; 




























