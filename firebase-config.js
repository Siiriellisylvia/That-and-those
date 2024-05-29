// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8JDWoE-oP_AuoaItfdKbc4wMMQYdaF8g",
  authDomain: "that-and-those.firebaseapp.com",
  projectId: "that-and-those",
  storageBucket: "that-and-those.appspot.com",
  messagingSenderId: "192228849768",
  appId: "1:192228849768:web:ea02c5905599ea9cd4e3dd",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export const productsRef = collection(db, "products");

export const storage = getStorage(firebaseApp);


export { db, collection, addDoc };
