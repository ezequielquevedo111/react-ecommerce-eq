import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCHTVK981eaZShOmkwX170Y-RL_T5VMFy8",
  authDomain: "reactjs-ecommerce-equevedo.firebaseapp.com",
  projectId: "reactjs-ecommerce-equevedo",
  storageBucket: "reactjs-ecommerce-equevedo.appspot.com",
  messagingSenderId: "291072166122",
  appId: "1:291072166122:web:a92e5dfcc70f79f7a12f93",
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
