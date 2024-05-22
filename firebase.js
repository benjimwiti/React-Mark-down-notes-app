import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDESApGME8F1J4k9ZC90c3-7GGpvhq8zjY",
  authDomain: "benji-react-note-app.firebaseapp.com",
  projectId: "benji-react-note-app",
  storageBucket: "benji-react-note-app.appspot.com",
  messagingSenderId: "29920609274",
  appId: "1:29920609274:web:62c48375bfd66a71d29a43"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
