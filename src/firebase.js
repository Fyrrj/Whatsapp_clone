import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBPFxhgZGGnqQhKFJMvyP09vmyn9I8hx9w",
  authDomain: "whatsappclone-eff66.firebaseapp.com",
  databaseURL: "https://whatsappclone-eff66.firebaseio.com",
  projectId: "whatsappclone-eff66",
  storageBucket: "whatsappclone-eff66.appspot.com",
  messagingSenderId: "230546576517",
  appId: "1:230546576517:web:b14eb1ddcced80eb48c5ec",
  measurementId: "G-HPBS3THWXM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
