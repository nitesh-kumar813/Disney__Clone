
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { collection, doc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC4kdhgwBtA0_PDDY7ZwsPxuHt0R7r98SQ",
    authDomain: "disneyplus-clone-6e4c6.firebaseapp.com",
    projectId: "disneyplus-clone-6e4c6",
    storageBucket: "disneyplus-clone-6e4c6.appspot.com",
    messagingSenderId: "552215789106",
    appId: "1:552215789106:web:c7760f0341f5960094862b",
    measurementId: "G-G60FB8TQ8S"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage, collection, doc, getDoc };
export default db;








