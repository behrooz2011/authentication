// // Firebase App (the core Firebase SDK) is always required and must be listed first
// import * as firebase from "firebase/app";

// // If you enabled Analytics in your project, add the Firebase SDK for Analytics
// // import "firebase/analytics";

// // Add the Firebase products that you want to use
// import "firebase/auth";
// import "firebase/firestore";

// // TODO: Replace the following with your app's Firebase project configuration
// // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
// const firebaseConfig = {
//     // ...
//     apiKey: "AIzaSyBo7ArPsQQkRwZTzSz6Js9-vphFQBlFEDg",
//     authDomain: "testauth-9509d.firebaseapp.com",
//     databaseURL: "https://testauth-9509d.firebaseio.com",
//     projectId: "testauth-9509d",
//     storageBucket: "testauth-9509d.appspot.com",
//     messagingSenderId: "608396104900",
//     appId: "1:608396104900:web:6f01054db2a1007c2ea591",
//     measurementId: "G-RS9M8EQKNB"
//   };
  
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

//   export default firebaseConfig;
//   console.log("from the firebbbbb");

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/app'

var firebaseConfig = {

  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
//   firebase.auth();

//   export default {
//     firebaseConfig, 
//   }
export default fire;