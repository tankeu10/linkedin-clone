import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDbPJ7Hbkx8rm9OLA3qsfVJzLiSBFAUoPc",
    authDomain: "linkedin-clone-7754d.firebaseapp.com",
    projectId: "linkedin-clone-7754d",
    storageBucket: "linkedin-clone-7754d.appspot.com",
    messagingSenderId: "54538861430",
    appId: "1:54538861430:web:7084afc675d913495bd857"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app)
 export const database = getFirestore(app)