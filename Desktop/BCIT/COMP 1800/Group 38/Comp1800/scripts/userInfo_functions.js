//create reference to firestore
var firestore = firebase.firestore();
const docRef = firestore.doc("Accounts/aqs1lv852uwoCZB7009P");

//Create query selectors for page elements
const uNameField = document.querySelector("#uName");
const fNameField = document.querySelector("#fName");
const lNameField = document.querySelector("#lName");
const BAfield = document.querySelector("#lSA");
const SAfield = document.querySelector("#lBA");
const doneButton = document.querySelector("#saveButton");
const loadButton = document.querySelector("#loadButton");

//Create event listener for button click
doneButton.addEventListener("click", function () {
    const textToSave = uNameField.value;
    const textToSave2 = fNameField.value;
    const textToSave3 = lNameField.value;
    const textToSave4 = BAfield.value;
    const textToSave5 = SAfield.value;
    console.log("Setting " + textToSave + " as Username");
    console.log("Setting " + textToSave2 + " as FirstName");
    console.log("Setting " + textToSave3 + " as LastName");
    docRef.set({
        Username: textToSave,
        FirstName: textToSave2,
        LastName: textToSave3,
        ShippingAddress: textToSave4,
        BillingAddress: textToSave5,
    }).then(function () {
        console.log("Info saved!");
        alert("Info saved!");
    }).catch(function (error) {
        console.log("Got an error: ", error);
    });
});

docRef.get().then(function (doc) {
    if (doc && doc.exists) {
        const myData = doc.data();
        uNameField.value = myData.Username;
        fNameField.value = myData.FirstName;
        lNameField.value = myData.LastName;
        BAfield.value = myData.BillingAddress;
        SAfield.value = myData.ShippingAddress;
        console.log("Loaded values");
    }
})
