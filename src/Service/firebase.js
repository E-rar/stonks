// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA98SfkczgSt9cyZTIA9uP8SxLpyuPDM-I",
  authDomain: "mount-stonk.firebaseapp.com",
  projectId: "mount-stonk",
  storageBucket: "mount-stonk.appspot.com",
  messagingSenderId: "39944236358",
  appId: "1:39944236358:web:95decb49549f08f29a4947",
  measurementId: "G-49Z09MXELZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
// Init the Storage service
const storage = getStorage(app);
// Init the Firestore service
const db = getFirestore();
export { firebase, auth, storage, db }