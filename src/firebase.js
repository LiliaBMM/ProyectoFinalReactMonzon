import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLSqSpWo08pZLw7lO5HOZ6yQV85p3i52U",
  authDomain: "vallita-da8da.firebaseapp.com",
  projectId: "vallita-da8da",
  storageBucket: "vallita-da8da.appspot.com",
  messagingSenderId: "521395523477",
  appId: "1:521395523477:web:0d704a65e024e50aa9f09c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);