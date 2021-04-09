function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(".manageInventoryButton").click(function () {
    if ($("#manageInventoryPage").css("display") == "none") {
        $("#manageInventoryPage").css("display", "block");
        $("#homeContainer").css("display", "none");
        $("#addInventoryContainer").css("display", "none");
    };
});



$(".homeButton").click(function () {
    if ($("#homeContainer").css("display") == "none") {
        $("#homeContainer").css("display", "block");
        $("#manageInventoryPage").css("display", "none");
        $("#addInventoryContainer").css("display", "none");
    };
});



$("#addNewProductButton").click(function () {
    if ($("#addInventoryContainer").css("display") == "none") {
        $("#addInventoryContainer").css("display", "block");
        $("#manageInventoryPage").css("display", "none");
        $("#homeContainer").css("display", "none");
    };

});


// The code below retrieves data from the database and displays them in a table.
function showInventory() {
    db.collection("Inventory").get()
        .then(function (snap) {
            snap.forEach(function (doc) {
                var a = doc.data().amount;
                var n = doc.data().name;
                var p = doc.data().price;

                $(".tableInventory").append($("<tr><td class='productNamePadding'>" + n + "</td><td>" + a + "</td><td>$" + p + "</td></tr>"));
            })
        });
}


showInventory();
$("#saveButton").css("display", "none");


var inventoryCounterRef = db.collection("InventoryCounter");

var inventoryRef = db.collection("Inventory");


// When the user clicks on the "Submit" button, the code below adds an item's information (name, amount, and price) 
// and writes the data to the database. It also updates the counter value by increments of 1.
$("#submitButton").click(function () {

    if ($("#addInventoryTableProductName").val() == '' || $("#productAmount").val() == '' || $("#productPrice").val() == '') {
        alert("Please fill out all inputs with appropriate values");
    }
    else {

        db.collection("InventoryCounter").get()
            .then(function (snap) {
                snap.forEach(function (doc) {
                    var c = doc.data().fireStoreInventoryCounter;

                    inventoryRef.doc("product" + c).set({
                        amount: $("#productAmount").val(),
                        name: $("#addInventoryTableProductName").val(),
                        price: $("#productPrice").val(),
                    });

                    inventoryCounterRef.doc("inventoryDocCounter").update({
                        fireStoreInventoryCounter: firebase.firestore.FieldValue.increment(1)
                    });

                    $("#addInventoryContainer").css("display", "none");
                    $("#manageInventoryPage").css("display", "block");

                    $(".tableInventory").empty();

                    showInventory();
                    $(".tableInventory").append("<th class='productNameHeading'>Product Name</th>");
                    $(".tableInventory").append("<th class='inventoryHeading'>Inventory</th>");
                    $(".tableInventory").append("<th class='priceHeading'>Price ($CAD)</th>");
                })
            });
    }
});





// When the user clicks on the "Update Inventory/Price" button, the code below will
// retrieve the data from the data base and displays them in a table but with a counter for each value
// and an input tag in the inventory and price column (for the user to write in to update the inventory listed).
$("#updateInventoryAndPrice").click(function () {

    let counterX = 0;
    $(".tableInventory tr").remove();
    $(".tableInventory").empty();


    $(".tableInventory").append("<th class='productNameHeading'>Product Name</th>");
    $(".tableInventory").append("<th class='inventoryHeading'>Inventory</th>");
    $(".tableInventory").append("<th class='priceHeading'>Price ($CAD)</th>");


    db.collection("Inventory").get()
        .then(function (snap) {
            snap.forEach(function (doc) {
                var a = doc.data().amount;
                var n = doc.data().name;
                var p = doc.data().price;

                $(".tableInventory").append($("<tr><td class=' productNamePadding productNameCounting" + counterX + "'>" + n + "</td><td><input type='number' class='inputInventoryNumber" + counterX + "' value='" + a + "'></td><td>$<input type='number' class='inputPriceNumber" + counterX + "' value='" + p + "'></td></tr>"));
                counterX++;
            })
        })
    $("#saveButton").css("display", "block");
    $("#addNewProductButton").css("display", "none");
    $("#updateInventoryAndPrice").css("display", "none");

});




//The code below is for when the user finishes updating the inventory list and wants to save it.
// The code overwrites the fields in the "'product' + counter" documents, which acts like an "update".
$("#saveButton").click(function () {
    let counter = 0;

    $(".tableInventory tr").each(function () {
        let x = $(".inputInventoryNumber" + counter).val();
        let y = $('.productNameCounting' + counter).html();
        let z = $(".inputPriceNumber" + counter).val();

        inventoryRef.doc("product" + counter).set({
            amount: x,
            name: y,
            price: z,
        });
        counter++;
    });

    $(".tableInventory").empty();


    $(".tableInventory").append("<th class='productNameHeading'>Product Name</th>");
    $(".tableInventory").append("<th class='inventoryHeading'>Inventory</th>");
    $(".tableInventory").append("<th class='priceHeading'>Price ($CAD)</th>");
    showInventory();

    $("#manageInventoryPage").css("display", "block");
    $("#saveButton").css("display", "none");
    $("#addNewProductButton").css("display", "block");
    $("#updateInventoryAndPrice").css("display", "block");
});



