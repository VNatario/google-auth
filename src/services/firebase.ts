// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhljXYAjRBz9E28ASbdT0L9CL4zL9L7Es",
  authDomain: "auth-8e7a3.firebaseapp.com",
  projectId: "auth-8e7a3",
  storageBucket: "auth-8e7a3.appspot.com",
  messagingSenderId: "65135738365",
  appId: "1:65135738365:web:79fb8cd4c168688258ad94",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Obter parâmetros de autênticação da aplicação
export const auth = getAuth(app);
