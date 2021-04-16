// This function is used to check  the LoginCheck collection in firestore to see
// if a user has successfully logged in. If so, it will change the href source of the
// hyperlink with the id=profileImageLink to the Store_User_Account.html.
function checkIfAUserHasLoggedIn() {
    db.collection("LoginCheck").get()
        .then(function (snap) {
            snap.forEach(function (doc) {
                var a = doc.data().aUserLoggedIn;
                if(a == true){
                    document.getElementById("profileImageLink").setAttribute('href', "Store_User_Account.html");
                }
            })
        });
}

// Calls upon the checkIfAUserHasLoggedIn() function when the window loads.
window.onload = function(){
    checkIfAUserHasLoggedIn();
}
