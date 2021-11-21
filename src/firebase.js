
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
require('dotenv').config()
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKe,
    authDomain: process.env.REACT_APP_authDomain,
    databaseURL: process.env.REACT_APP_databaseURL,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
  };

// console.log(process.env)
const app=firebase.initializeApp(firebaseConfig);

const auth=app.auth();
const db=app.firestore();

export {auth,db};