// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4eSeVShOK6zGdMNgcDSjNFk8w8uI_4eA",
  authDomain: "stephesan-enterprises-limited.firebaseapp.com",
  projectId: "stephesan-enterprises-limited",
  storageBucket: "stephesan-enterprises-limited.firebasestorage.app",
  messagingSenderId: "109327555285",
  appId: "1:109327555285:web:9699717ff4e5c4e14d205c",
  measurementId: "G-V7X54X149J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);