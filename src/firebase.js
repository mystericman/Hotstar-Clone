import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCyUMcX6AZxtoikEXjKSLMg2aWp6ppi8jc",
  authDomain: "disney-hotstar-clone-70013.firebaseapp.com",
  projectId: "disney-hotstar-clone-70013",
  storageBucket: "disney-hotstar-clone-70013.appspot.com",
  messagingSenderId: "732071769621",
  appId: "1:732071769621:web:b049bf66dccb9beb2a401c",
  measurementId: "G-SGYTL0QPZR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;

 