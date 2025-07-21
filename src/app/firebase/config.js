
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCi4IKVU69amwNr6HFnWM8g_l0gFeM6YIM",
  authDomain: "nextjs-firebase-auth-2fe44.firebaseapp.com",
  projectId: "nextjs-firebase-auth-2fe44",
  storageBucket: "nextjs-firebase-auth-2fe44.appspot.com",
  messagingSenderId: "887239186558",
  appId: "1:887239186558:web:ddb7004d7c143b8576a02f"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



