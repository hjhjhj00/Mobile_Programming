// Import the functions you need from the SDKs you need
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence
} from 'firebase/auth/react-native';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUIgImGGMuKP6V8JErWAL_6cKtTqGJ_PY",
  authDomain: "myproject01-mobile.firebaseapp.com",
  databaseURL: "https://myproject01-mobile-default-rtdb.firebaseio.com",
  projectId: "myproject01-mobile",
  storageBucket: "myproject01-mobile.appspot.com",
  messagingSenderId: "1036837869350",
  appId: "1:1036837869350:web:6350d7b5c70971d8ac53e7",
  measurementId: "G-PL3HYTPRSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Auth
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };