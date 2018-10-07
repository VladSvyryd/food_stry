 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'
 
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDl8--1JQdhf9x5_Hh0cnXWyx56TayS9-0",
    authDomain: "vladonius-foodisland.firebaseapp.com",
    databaseURL: "https://vladonius-foodisland.firebaseio.com",
    projectId: "vladonius-foodisland",
    storageBucket: "vladonius-foodisland.appspot.com",
    messagingSenderId: "716539897750"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots:true})
  
  export default firebase;