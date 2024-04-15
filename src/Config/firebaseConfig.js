import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC3UeGGnCIBXkMrXqe628kG1NkrCVh0CvM",
    authDomain: "busco-uni.firebaseapp.com",
    projectId: "busco-uni",
    storageBucket: "busco-uni.appspot.com",
    messagingSenderId: "274423245712",
    appId: "1:274423245712:web:f51998279647a40e5ba115"
};
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//exportamos la base de datos a toda la app
export const db = getFirestore(app);