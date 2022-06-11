import {initializeApp} from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// const provider = new GoogleAuthProvider();

// export const signInWithGoogle = () => {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };


const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
export default app;
