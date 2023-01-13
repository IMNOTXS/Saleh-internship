// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoGwFXAdyjmA2dOs7M55hBuU6MQsinVzs",
  authDomain: "saleh-intership.firebaseapp.com",
  projectId: "saleh-intership",
  storageBucket: "saleh-intership.appspot.com",
  messagingSenderId: "216349471073",
  appId: "1:216349471073:web:2a9ef67702d004d3a91520",
  measurementId: "G-KFJMZF5GJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);