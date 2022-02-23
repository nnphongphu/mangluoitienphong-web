import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBZE31dfBi71PJjsAUTOrWMryNHuXGRgsQ",
  authDomain: "mangluoitienphong-de378.firebaseapp.com",
  projectId: "mangluoitienphong-de378",
  storageBucket: "mangluoitienphong-de378.appspot.com",
  messagingSenderId: "539909504889",
  appId: "1:539909504889:web:5697ef88a8fc53929cf9a8",
  measurementId: "G-KBEWCDF5W3",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
