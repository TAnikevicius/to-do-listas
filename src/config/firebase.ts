import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBn7pyIawoVBjHTEiKBPekaDeahZgoVrCE",
  authDomain: "to-do-list-55232.firebaseapp.com",
  projectId: "to-do-list-55232",
  storageBucket: "to-do-list-55232.appspot.com",
  messagingSenderId: "829819919174",
  appId: "1:829819919174:web:5adfa53466a5fdc3dde347",
};

initializeApp(firebaseConfig);

export const db = getFirestore();
