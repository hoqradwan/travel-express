// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE0COtaeI_BHLhASP9nc4zzNwVlt4FDGk",
  authDomain: "travel-guide-express.firebaseapp.com",
  projectId: "travel-guide-express",
  storageBucket: "travel-guide-express.appspot.com",
  messagingSenderId: "15574484282",
  appId: "1:15574484282:web:c6aa26c30140c6248dfc03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;