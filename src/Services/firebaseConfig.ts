import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBY4a589V6eMCrI3rdO6rvrh9zveoWaa1w",
  authDomain: "cep-signup.firebaseapp.com",
  databaseURL: "https://cep-signup-default-rtdb.firebaseio.com",
  projectId: "cep-signup",
  storageBucket: "cep-signup.appspot.com",
  messagingSenderId: "914077431492",
  appId: "1:914077431492:web:93a9c87a1ae5ce6b567b91"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
export const enderecosRef = ref(db, "/enderecos")