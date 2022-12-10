import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCIottXk0GayNMsIABlIWvjO6qqCSAvy30",
    authDomain: "slack-clone-80c19.firebaseapp.com",
    databaseURL: "https://slack-clone-80c19-default-rtdb.firebaseio.com",
    projectId: "slack-clone-80c19",
    storageBucket: "slack-clone-80c19.appspot.com",
    messagingSenderId: "417053610784",
    appId: "1:417053610784:web:45e8abdcb2047f16963d45",
    measurementId: "G-6JNMT0N8JQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
