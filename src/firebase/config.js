import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAmqFws9uNjJQEfQeqqUXq7v6QJHj-4my0",
    authDomain: "cooking-recipe-site-58800.firebaseapp.com",
    projectId: "cooking-recipe-site-58800",
    storageBucket: "cooking-recipe-site-58800.appspot.com",
    messagingSenderId: "240697955589",
    appId: "1:240697955589:web:cad9f6f82ed5084ebb936c"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export {projectFirestore} ;