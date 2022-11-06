
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCSkw9mrksWM_5wlZEG7KuNITlgrUOetPM",
  authDomain: "tiny-shop-7f8ed.firebaseapp.com",
  projectId: "tiny-shop-7f8ed",
  storageBucket: "tiny-shop-7f8ed.appspot.com",
  messagingSenderId: "606994363282",
  appId: "1:606994363282:web:a20cab4a8fa99116f3474b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}