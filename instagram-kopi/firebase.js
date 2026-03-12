import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcLImfHsA2bTWSttcDCbfkxAqVaTc36lg",
  authDomain: "informatik-app-insta-klon.firebaseapp.com",
  projectId: "informatik-app-insta-klon",
  storageBucket: "informatik-app-insta-klon.firebasestorage.app",
  messagingSenderId: "204520156450",
  appId: "1:204520156450:web:c0095aea9c91d96a08897b"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);