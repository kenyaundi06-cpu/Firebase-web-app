import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAiFMJRhZD7nFPKmEmfMYFBNWb4W5VFyp0",
  authDomain: "stephesan-web.firebaseapp.com",
  databaseURL: "https://stephesan-web-default-rtdb.firebaseio.com",
  projectId: "stephesan-web",
  storageBucket: "stephesan-web.firebasestorage.app",
  messagingSenderId: "814499537641",
  appId: "1:814499537641:web:559bca0c7dca8411f28678",
  measurementId: "G-1KSH2EJFRD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Safely initialize analytics only if the environment supports it (browsers)
isSupported().then((supported) => {
  if (supported) {
    const analytics = getAnalytics(app);
    console.log("Firebase Analytics initialized in the browser!");
  } else {
    console.log("Firebase initialized successfully! (Analytics skipped because this is a terminal/server environment)");
  }
});

