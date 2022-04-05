// Before: version 8
/* import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"; */

// After version 9 compat
// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyAkFA6XDmYvsEHhQ_4xJznhi_pzOgNtGDg",
  authDomain: "clouzy.firebaseapp.com",
  projectId: "clouzy",
  storageBucket: "clouzy.appspot.com",
  messagingSenderId: "450008457117",
  appId: "1:450008457117:web:08dfaad257fe7b7e3a1974",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
