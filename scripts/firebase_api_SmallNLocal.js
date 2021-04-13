// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCs59A6L5jovGzusswqyU834QF0aR_ArFg",
    authDomain: "team38smallnlocal.firebaseapp.com",
    databaseURL: "https://team38smallnlocal-default-rtdb.firebaseio.com",
    projectId: "team38smallnlocal",
    storageBucket: "team38smallnlocal.appspot.com",
    messagingSenderId: "850338400544",
    appId: "1:850338400544:web:1390907581d4761e08ef45",
    measurementId: "G-G3R4Z16DQ1"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Get a reference to database
const db = firebase.firestore();
// Get a reference to the storage service, which is used to create references in your storage bucket
// const storage = firebase.storage();