// This function is used to check  the LoginCheck collection in firestore to see
// if a user has successfully logged in. If so, it will change the href source of the
// hyperlink with the id=profileImageLink to the Store_User_Account.html.
function checkIfAUserHasLoggedIn() {
    db.collection("LoginCheck").get()
        .then(function (snap) {
            snap.forEach(function (doc) {
                var a = doc.data().aUserLoggedIn;
                if (a == true) {
                    document.getElementById("profileImageLink").setAttribute('href', "Store_User_Account.html");
                }
            })
        });
}
// Calls upon the checkIfAUserHasLoggedIn() function when the window loads.
window.onload = function () {
    checkIfAUserHasLoggedIn();
}

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;

let cost1 = 0;
let cost2 = 0;
let cost3 = 0;
let cost4 = 0;
let cost5 = 0;
let cost6 = 0;

$(document).ready(function () {
    hide1();
    hide2();
    hide3();
    hide4();
    hide5();
    hide6();
    total();
});

function checkout() {
    remove1();
    remove2();
    remove3();
    remove4();
    remove5();
    remove6();

}

function readCart1() {
    db.collection("Cart").doc("Item1")
        .onSnapshot(function (c) {
            document.getElementById("cartProductName1").innerHTML = c.data().ProductName;
            document.getElementById("cartSoldBy1").innerHTML = c.data().SoldBy;
            document.getElementById("cartProductPrice1").innerHTML = c.data().ProductPrice;
            document.getElementById("cartProductAmount1").innerHTML = c.data().ProductAmount;
            document.getElementById("cartProductImage1").src = image;
        })
}

readCart1();
function readCart2() {
    db.collection("Cart").doc("Item2")
        .onSnapshot(function (b) {
            var image2 = b.data().ProductImage;
            document.getElementById("cartProductName2").innerHTML = b.data().ProductName;
            document.getElementById("cartSoldBy2").innerHTML = b.data().SoldBy;
            document.getElementById("cartProductPrice2").innerHTML = b.data().ProductPrice;
            document.getElementById("cartProductAmount2").innerHTML = b.data().ProductAmount;
            document.getElementById("cartProductImage2").src = image2;
        })
}
readCart2();

function readCart3() {
    db.collection("Cart").doc("Item3")
        .onSnapshot(function (c) {
            var image3 = c.data().ProductImage;
            document.getElementById("cartProductName3").innerHTML = c.data().ProductName;
            document.getElementById("cartSoldBy3").innerHTML = c.data().SoldBy;
            document.getElementById("cartProductPrice3").innerHTML = c.data().ProductPrice;
            document.getElementById("cartProductAmount3").innerHTML = c.data().ProductAmount;
            document.getElementById("cartProductImage3").src = image3;
        })
}

readCart3();

function readCart4() {
    db.collection("Cart").doc("Item4")
        .onSnapshot(function (c) {
            var image4 = c.data().ProductImage;
            document.getElementById("cartProductName4").innerHTML = c.data().ProductName;
            document.getElementById("cartSoldBy4").innerHTML = c.data().SoldBy;
            document.getElementById("cartProductPrice4").innerHTML = c.data().ProductPrice;
            document.getElementById("cartProductAmount4").innerHTML = c.data().ProductAmount;
            document.getElementById("cartProductImage4").src = image4;
        })
}

readCart4();

function readCart5() {
    db.collection("Cart").doc("Item5")
        .onSnapshot(function (c) {
            var image5 = c.data().ProductImage;
            document.getElementById("cartProductName5").innerHTML = c.data().ProductName;
            document.getElementById("cartSoldBy5").innerHTML = c.data().SoldBy;
            document.getElementById("cartProductPrice5").innerHTML = c.data().ProductPrice;
            document.getElementById("cartProductAmount5").innerHTML = c.data().ProductAmount;
            document.getElementById("cartProductImage5").src = image5;
        })
}

readCart5();

function readCart6() {
    db.collection("Cart").doc("Item6")
        .onSnapshot(function (c) {
            var image6 = c.data().ProductImage;
            document.getElementById("cartProductName6").innerHTML = c.data().ProductName;
            document.getElementById("cartSoldBy6").innerHTML = c.data().SoldBy;
            document.getElementById("cartProductPrice6").innerHTML = c.data().ProductPrice;
            document.getElementById("cartProductAmount6").innerHTML = c.data().ProductAmount;
            document.getElementById("cartProductImage6").src = image6;
        })
}

readCart6();


function remove1() {
    var cartRef = db.collection("Cart");
    cartRef.doc("Item1").update({
        ProductAmount: -2,
    });
}
function remove2() {
    var cartRef = db.collection("Cart");
    cartRef.doc("Item2").update({
        ProductAmount: -2,
    });
}
function remove3() {
    var cartRef = db.collection("Cart");
    cartRef.doc("Item3").update({
        ProductAmount: -1,
    });
}
function remove4() {
    var cartRef = db.collection("Cart");
    cartRef.doc("Item4").update({
        ProductAmount: -1,
    });
}
function remove5() {
    var cartRef = db.collection("Cart");
    cartRef.doc("Item5").update({
        ProductAmount: -1,
    });
}
function remove6() {
    var cartRef = db.collection("Cart");
    cartRef.doc("Item6").update({
        ProductAmount: -1,
    });
}

function hide1() {
    db.collection("Cart").doc("Item1")
        .onSnapshot(function (c) {
            var item1 = c.data().ProductAmount;
            if (item1 == -2) {
                document.getElementById("cartItem1").style.display = "none";
            }
        })
}
function hide2() {
    db.collection("Cart").doc("Item2")
        .onSnapshot(function (c) {
            var item1 = c.data().ProductAmount;
            if (item1 == -2) {
                document.getElementById("cartItem2").style.display = "none";
            }
        })
}
function hide3() {
    db.collection("Cart").doc("Item3")
        .onSnapshot(function (c) {
            var item1 = c.data().ProductAmount;
            if (item1 == -1) {
                document.getElementById("cartItem3").style.display = "none";
            }
        })
}
function hide4() {
    db.collection("Cart").doc("Item4")
        .onSnapshot(function (c) {
            var item1 = c.data().ProductAmount;
            if (item1 == -1) {
                document.getElementById("cartItem4").style.display = "none";
            }
        })
}
function hide5() {
    db.collection("Cart").doc("Item5")
        .onSnapshot(function (c) {
            var item1 = c.data().ProductAmount;
            if (item1 == -1) {
                document.getElementById("cartItem5").style.display = "none";
            }
        })
}
function hide6() {
    db.collection("Cart").doc("Item6")
        .onSnapshot(function (c) {
            var item1 = c.data().ProductAmount;
            if (item1 == -1) {
                document.getElementById("cartItem6").style.display = "none";
            }
        })
}

function updateCart() {
    db.collection("Cart").doc("Item1")
        .onSnapshot(function (b) {
            document.getElementById("cartProductAmount1").innerHTML = b.data().ProductAmount;

        })
    db.collection("Cart").doc("Item2")
        .onSnapshot(function (b) {
            document.getElementById("cartProductAmount2").innerHTML = b.data().ProductAmount;

        })
    db.collection("Cart").doc("Item3")
        .onSnapshot(function (b) {
            document.getElementById("cartProductAmount3").innerHTML = b.data().ProductAmount;

        })
    db.collection("Cart").doc("Item4")
        .onSnapshot(function (b) {
            document.getElementById("cartProductAmount4").innerHTML = b.data().ProductAmount;

        })
    db.collection("Cart").doc("Item5")
        .onSnapshot(function (b) {
            document.getElementById("cartProductAmount5").innerHTML = b.data().ProductAmount;

        })
    db.collection("Cart").doc("Item6")
        .onSnapshot(function (b) {
            document.getElementById("cartProductAmount6").innerHTML = b.data().ProductAmount;

        })
}

function plus1() {
    const userRef = db.collection('Cart').doc('Item1');
    const increaseBy = firebase.firestore.FieldValue.increment(1);

    userRef.update({ ProductAmount: increaseBy });
}


function plus2() {
    const userRef = db.collection('Cart').doc('Item2');
    const increaseBy = firebase.firestore.FieldValue.increment(1);

    userRef.update({ ProductAmount: increaseBy });
}

function plus3() {
    const userRef = db.collection('Cart').doc('Item3');
    const increaseBy = firebase.firestore.FieldValue.increment(1);

    userRef.update({ ProductAmount: increaseBy });
}
function plus4() {
    const userRef = db.collection('Cart').doc('Item4');
    const increaseBy = firebase.firestore.FieldValue.increment(1);

    userRef.update({ ProductAmount: increaseBy });
}
function plus5() {
    const userRef = db.collection('Cart').doc('Item5');
    const increaseBy = firebase.firestore.FieldValue.increment(1);

    userRef.update({ ProductAmount: increaseBy });
}
function plus6() {
    const userRef = db.collection('Cart').doc('Item6');
    const increaseBy = firebase.firestore.FieldValue.increment(1);

    userRef.update({ ProductAmount: increaseBy });
}



function minus1() {
    const userRef = db.collection('Cart').doc('Item1');
    const decreaseBy = firebase.firestore.FieldValue.increment(-1);
    userRef.update({ ProductAmount: decreaseBy });
}
function minus2() {
    const userRef = db.collection('Cart').doc('Item2');
    const decreaseBy = firebase.firestore.FieldValue.increment(-1);

    userRef.update({ ProductAmount: decreaseBy });
}
function minus3() {
    const userRef = db.collection('Cart').doc('Item3');
    const decreaseBy = firebase.firestore.FieldValue.increment(-1);

    userRef.update({ ProductAmount: decreaseBy });
}
function minus4() {
    const userRef = db.collection('Cart').doc('Item4');
    const decreaseBy = firebase.firestore.FieldValue.increment(-1);

    userRef.update({ ProductAmount: decreaseBy });
}
function minus5() {
    const userRef = db.collection('Cart').doc('Item5');
    const decreaseBy = firebase.firestore.FieldValue.increment(-1);

    userRef.update({ ProductAmount: decreaseBy });
}
function minus6() {
    const userRef = db.collection('Cart').doc('Item6');
    const decreaseBy = firebase.firestore.FieldValue.increment(-1);

    userRef.update({ ProductAmount: decreaseBy });
}
function cost() {
    const cartRef1 = db.collection('Cart').doc('Item1');
    cartRef1.onSnapshot(function (c) {
        var test1 = c.data().ProductAmount;
        if (test1 == -1 || test1 == 0) {
            cartRef1.update({ ProductAmount: 1 });

        }
    })
    const cartRef2 = db.collection('Cart').doc('Item2');
    cartRef2.onSnapshot(function (c) {
        var test2 = c.data().ProductAmount;
        if (test2 == -1 || test2 == 0) {
            cartRef2.update({ ProductAmount: 1 });

        }
    })
    const cartRef3 = db.collection('Cart').doc('Item3');
    cartRef3.onSnapshot(function (c) {
        var test3 = c.data().ProductAmount;
        if (test3 == 0) {
            cartRef3.update({ ProductAmount: 1 });

        }
    })

    const cartRef4 = db.collection('Cart').doc('Item4');
    cartRef4.onSnapshot(function (c) {
        var test4 = c.data().ProductAmount;
        if (test4 == 0) {
            cartRef4.update({ ProductAmount: 1 });

        }
    })

    const cartRef5 = db.collection('Cart').doc('Item5');
    cartRef5.onSnapshot(function (c) {
        var test5 = c.data().ProductAmount;
        if (test5 == 0) {
            cartRef5.update({ ProductAmount: 1 });

        }
    })

    const cartRef6 = db.collection('Cart').doc('Item6');
    cartRef6.onSnapshot(function (c) {
        var test6 = c.data().ProductAmount;
        if (test6 == 0) {
            cartRef6.update({ ProductAmount: 1 });

        }
    })

}
cost();

function total() {
    const cartRef1 = db.collection('Cart').doc('Item1');
    cartRef1.onSnapshot(function (c) {
        cost1 = c.data().ProductAmount;
        price1 = c.data().ProductPrice;
        if (cost1 < 0) {
            cost1 = 0;
        }

    })
    const cartRef2 = db.collection('Cart').doc('Item2');
    cartRef2.onSnapshot(function (b) {
        cost2 = b.data().ProductAmount;
        price2 = b.data().ProductPrice;
        if (cost2 < 0) {
            cost2 = 0;
        }

    })
    const cartRef3 = db.collection('Cart').doc('Item3');
    cartRef3.onSnapshot(function (b) {
        cost3 = b.data().ProductAmount;
        price3 = b.data().ProductPrice;
        if (cost3 < 0) {
            cost3 = 0;
        }

    })
    const cartRef4 = db.collection('Cart').doc('Item4');
    cartRef4.onSnapshot(function (b) {
        cost4 = b.data().ProductAmount;
        price4 = b.data().ProductPrice;
        if (cost4 < 0) {
            cost4 = 0;
        }

    })
    const cartRef5 = db.collection('Cart').doc('Item5');
    cartRef5.onSnapshot(function (b) {
        cost5 = b.data().ProductAmount;
        price5 = b.data().ProductPrice;
        if (cost5 < 0) {
            cost5 = 0;
        }

    })
    const cartRef6 = db.collection('Cart').doc('Item6');
    cartRef6.onSnapshot(function (b) {
        cost6 = b.data().ProductAmount;
        price6 = b.data().ProductPrice;
        if (cost6 < 0) {
            cost6 = 0;
        }
    })
    var totalCost = cost1 * price1 + cost2 * price2 + cost3 * price3 + cost4 * price4 + cost5 * price5 + cost6 * price6;
    var totalCostTax = totalCost * 1.12;
    document.getElementById("totalCost").innerHTML = totalCost.toFixed(2);
    document.getElementById("totalCostTax").innerHTML = totalCostTax.toFixed(2);
}
total();

function checkOut() {
    alert('Checkout');
}