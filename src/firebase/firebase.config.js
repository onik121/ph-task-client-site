// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXydgEUycsAuWgnVguJElNU1I6_yvtVn0",
  authDomain: "car-delar-11a76.firebaseapp.com",
  projectId: "car-delar-11a76",
  storageBucket: "car-delar-11a76.appspot.com",
  messagingSenderId: "720434122639",
  appId: "1:720434122639:web:2f4042cc7307a945de05fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;