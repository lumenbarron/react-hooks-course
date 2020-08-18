import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDl3JDi5tRC5AI0xSuCOZpXSFk8GR-aPeY",
    authDomain: "movies-lucy.firebaseapp.com",
    databaseURL: "https://movies-lucy.firebaseio.com",
    projectId: "movies-lucy",
    storageBucket: "movies-lucy.appspot.com",
    messagingSenderId: "391993181868",
    appId: "1:391993181868:web:4907ea369bc363f0"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase};