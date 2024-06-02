// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, updateDoc, doc} from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBNNGN6bhZe-01-ycf7_LsFz_wolvsaqE",
  authDomain: "that-and-those-6b20e.firebaseapp.com",
  projectId: "that-and-those-6b20e",
  storageBucket: "that-and-those-6b20e.appspot.com",
  messagingSenderId: "1005799275759",
  appId: "1:1005799275759:web:0168afbda71be864dbef1a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export const productsRef = collection(db, "products");

export const storage = getStorage(firebaseApp);


export { db, collection, addDoc , updateDoc, doc};
