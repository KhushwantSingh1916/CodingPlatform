// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC1OLyOdDyt3KEr7acgayAESBQhiiebIbk",
  authDomain: "club-quiz.firebaseapp.com",
  projectId: "club-quiz",
  storageBucket: "club-quiz.firebasestorage.app",
  messagingSenderId: "503052613912",
  appId: "1:503052613912:web:3d39800cfaf81b2b5c866d",
  measurementId: "G-SNPGVCSGX6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);