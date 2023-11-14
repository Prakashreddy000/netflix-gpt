// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNMDq_NDDSHEajvMdQxRwa4V-ji_deLCw",
  authDomain: "netflix-gpt-feaf1.firebaseapp.com",
  projectId: "netflix-gpt-feaf1",
  storageBucket: "netflix-gpt-feaf1.appspot.com",
  messagingSenderId: "948460459334",
  appId: "1:948460459334:web:c0b431e3dd1b5296b04147",
  measurementId: "G-VTKK35MMZ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);