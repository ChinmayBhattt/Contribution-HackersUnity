import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKMER2PHnbnFCc6uW_1T8CSU1rvRZm1qk",
  authDomain: "hacker-s-unity-newsletter.firebaseapp.com",
  projectId: "hacker-s-unity-newsletter",
  storageBucket: "hacker-s-unity-newsletter.firebasestorage.app",
  messagingSenderId: "11377078170",
  appId: "1:11377078170:web:41e4e4ad258d113b349423",
  measurementId: "G-7ZTZNB5GND",
};

// Initialize Firebase only once (SSR-safe)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export { db };
