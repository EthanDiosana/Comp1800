//---------------------------------------------------
// replace the lines below with your own "firebaseConfig"
// key value pairs
//--------------------------------------------------- 

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD6y6RYxmKtrazVAfOV73zvV9WxaRk9rZg",
    authDomain: "march2jeff.firebaseapp.com",
    projectId: "march2jeff",
    storageBucket: "march2jeff.appspot.com",
    messagingSenderId: "846223557907",
    appId: "1:846223557907:web:ee5a367a1e9b0ecd9986e6",
    measurementId: "G-DS6TWPM5F8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();