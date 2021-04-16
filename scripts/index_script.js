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

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;

function vancouver() {
    db.collection("Products").doc("ProductList1").onSnapshot(function (c) {
        var item1 = c.data().City;
        if (item1 == "Burnaby") {
            document.getElementById("index1").style.display = "none";
        } else {
            document.getElementById("index1").style.display = "block";
        }
    })
    db.collection("Products").doc("ProductList2").onSnapshot(function (c) {
        var item2 = c.data().City;
        if (item2 == "Burnaby") {
            document.getElementById("index2").style.display = "none";
        } else {
            document.getElementById("index2").style.display = "block";
        }
    })
    db.collection("Products").doc("ProductList3").onSnapshot(function (c) {
        var item3 = c.data().City;
        if (item3 == "Burnaby") {
            document.getElementById("index3").style.display = "none";
        } else {
            document.getElementById("index3").style.display = "block";
        }
    })
    db.collection("Products").doc("ProductList4").onSnapshot(function (c) {
        var item4 = c.data().City;
        if (item4 == "Burnaby") {
            document.getElementById("index4").style.display = "none";
        } else {
            document.getElementById("index4").style.display = "block";
        }
    })
    db.collection("Products").doc("ProductList5").onSnapshot(function (c) {
        var item5 = c.data().City;
        if (item5 == "Burnaby") {
            document.getElementById("index5").style.display = "none";
        } else {
            document.getElementById("index5").style.display = "block";
        }
    })
    db.collection("Products").doc("ProductList6").onSnapshot(function (c) {
        var item6 = c.data().City;
        if (item6 == "Burnaby") {
            document.getElementById("index6").style.display = "none";
        } else {
            document.getElementById("index6").style.display = "block";
        }
    })
}
function burnaby() {
    db.collection("Products").doc("ProductList1").onSnapshot(function (c) {
        var item1 = c.data().City;
        if (item1 != "Burnaby") {
            document.getElementById("index1").style.display = "none";
        } else {
            document.getElementById("index1").style.display = "block";
        }
    })
    db.collection("Products").doc("ProductList2").onSnapshot(function (c) {
        var item2 = c.data().City;
        if (item2 != "Burnaby") {
            document.getElementById("index2").style.display = "none";
        } else {
            document.getElementById("index2").style.display = "block";
        }
    })
    db.collection("Products").doc("ProductList3").onSnapshot(function (c) {
        var item3 = c.data().City;
        if (item3 != "Burnaby") {
            document.getElementById("index3").style.display = "none";
        } else {
            document.getElementById("index3").style.display = "block";
        }
    })
    db.collection("Products").doc("ProductList4").onSnapshot(function (c) {
        var item4 = c.data().City;
        if (item4 != "Burnaby") {
            document.getElementById("index4").style.display = "none";
        } else {
            document.getElementById("index4").style.display = "block";
        }
    })
    db.collection("Products").doc("ProductList5").onSnapshot(function (c) {
        var item5 = c.data().City;
        if (item5 != "Burnaby") {
            document.getElementById("index5").style.display = "none";
        } else {
            document.getElementById("index5").style.display = "block";
        }
    })
    db.collection("Products").doc("ProductList6").onSnapshot(function (c) {
        var item6 = c.data().City;
        if (item6 != "Burnaby") {
            document.getElementById("index6").style.display = "none";
        } else {
            document.getElementById("index6").style.display = "block";
        }
    })
}

function showAll() {

    document.getElementById("index1").style.display = "block";
    document.getElementById("index2").style.display = "block";
    document.getElementById("index3").style.display = "block";
    document.getElementById("index4").style.display = "block";
    document.getElementById("index5").style.display = "block";
    document.getElementById("index6").style.display = "block";

}

function readItem1() {
    db.collection("Products").doc("ProductList1")
        .onSnapshot(function (c) {
            var image1 = c.data().ProductImage;
            document.getElementById("productName1").innerHTML = c.data().ProductName;
            document.getElementById("soldBy1").innerHTML = c.data().SoldBy;
            document.getElementById("productPrice1").innerHTML = c.data().ProductPrice;
            document.getElementById("productImage1").src = image1;
        })
}

readItem1();

function readItem2() {
    db.collection("Products").doc("ProductList2")
        .onSnapshot(function (b) {
            var image2 = b.data().ProductImage;
            document.getElementById("productName2").innerHTML = b.data().ProductName;
            document.getElementById("soldBy2").innerHTML = b.data().SoldBy;
            document.getElementById("productPrice2").innerHTML = b.data().ProductPrice;
            document.getElementById("productImage2").src = image2;

        })
}
readItem2();
function readItem3() {
    db.collection("Products").doc("ProductList3")
        .onSnapshot(function (b) {
            var image3 = b.data().ProductImage;
            document.getElementById("productName3").innerHTML = b.data().ProductName;
            document.getElementById("soldBy3").innerHTML = b.data().SoldBy;
            document.getElementById("productPrice3").innerHTML = b.data().ProductPrice;
            document.getElementById("productImage3").src = image3;

        })
}
readItem3();
function readItem4() {
    db.collection("Products").doc("ProductList4")
        .onSnapshot(function (b) {
            var image4 = b.data().ProductImage;
            document.getElementById("productName4").innerHTML = b.data().ProductName;
            document.getElementById("soldBy4").innerHTML = b.data().SoldBy;
            document.getElementById("productPrice4").innerHTML = b.data().ProductPrice;
            document.getElementById("productImage4").src = image4;

        })
}
readItem4();
function readItem5() {
    db.collection("Products").doc("ProductList5")
        .onSnapshot(function (b) {
            var image5 = b.data().ProductImage;
            document.getElementById("productName5").innerHTML = b.data().ProductName;
            document.getElementById("soldBy5").innerHTML = b.data().SoldBy;
            document.getElementById("productPrice5").innerHTML = b.data().ProductPrice;
            document.getElementById("productImage5").src = image5;

        })
}
readItem5();
function readItem6() {
    db.collection("Products").doc("ProductList6")
        .onSnapshot(function (b) {
            var image6 = b.data().ProductImage;
            document.getElementById("productName6").innerHTML = b.data().ProductName;
            document.getElementById("soldBy6").innerHTML = b.data().SoldBy;
            document.getElementById("productPrice6").innerHTML = b.data().ProductPrice;
            document.getElementById("productImage6").src = image6;

        })
}
readItem6();



function myFunction1() {
    var cartRef = db.collection("Cart");
    cartRef.doc("Item1").set({
        ProductName: "Handmade Necklace",
        ProductPrice: 9.99,
        SoldBy: "MetalWorksBC",
        ProductAmount: count1,
    });
}
function myFunction2() {
    var cartRef = db.collection("Cart");
    cartRef.doc("Item2").set({
        ProductName: "Knitted Scarf",
        ProductPrice: 15.99,
        SoldBy: "VancouverClothes",
        ProductAmount: count2,
    });
}
function myFunction3() {
    var cartRef = db.collection("Cart");
    cartRef.doc("Item3").set({
        ProductName: "Sourdough Bread",
        ProductPrice: 4.99,
        SoldBy: "BurnabyBakers",
        ProductAmount: count3,
    });
}
function myFunction4() {
    var cartRef = db.collection("Cart");
    cartRef.doc("Item4").set({
        ProductName: "Strawberry Jam",
        ProductPrice: 7.99,
        SoldBy: "VancityPreserves",
        ProductAmount: count4,
    });
}
function myFunction5() {
    var cartRef = db.collection("Cart");
    cartRef.doc("Item5").set({
        ProductName: "Knitted Toque",
        ProductPrice: 12.99,
        SoldBy: "Toquecouver",
        ProductAmount: count5,
    });
}
function myFunction6() {
    var cartRef = db.collection("Cart");
    cartRef.doc("Item6").set({
        ProductName: "Stuffed Toy",
        ProductPrice: 21.99,
        SoldBy: "Vancouver Toys",
        ProductAmount: count6,
    });
}

function counter1() {
    count1++;
    document.getElementById("cartCount").innerHTML = count1 + count2;
    alert('Added to cart');
}
function counter2() {
    count2++;
    document.getElementById("cartCount").innerHTML = count1 + count2;
    alert('Added to cart');
}
function counter3() {
    count3++;
    document.getElementById("cartCount").innerHTML = count1 + count2;
    alert('Added to cart');
}
function counter4() {
    count4++;
    document.getElementById("cartCount").innerHTML = count1 + count2;
    alert('Added to cart');
}
function counter5() {
    count5++;
    document.getElementById("cartCount").innerHTML = count1 + count2;
    alert('Added to cart');
}
function counter6() {
    count6++;
    document.getElementById("cartCount").innerHTML = count1 + count2;
    alert('Added to cart');
}
function clickFunc1() {
    counter1();
    myFunction1();
}

function clickFunc2() {
    counter2();
    myFunction2();
}
function clickFunc3() {
    counter3();
    myFunction3();
}
function clickFunc4() {
    counter4();
    myFunction4();
}
function clickFunc5() {
    counter5();
    myFunction5();
}
function clickFunc6() {
    counter6();
    myFunction6();
}