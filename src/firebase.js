import firebase from "firebase";
import "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCatpW8C84fKrNSGub0m4LMDMfi4D4cGBM",
  authDomain: "texnomart-d0a91.firebaseapp.com",
  projectId: "texnomart-d0a91",
  storageBucket: "texnomart-d0a91.appspot.com",
  messagingSenderId: "305039836310",
  appId: "1:305039836310:web:0ed7a8547a0812cde52eb7",
  measurementId: "G-CZ0EKJBGJK"
};
const backend = firebase.initializeApp(firebaseConfig);
const auth = backend.auth()

export { auth, backend};

