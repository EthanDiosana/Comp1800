let count1 = 0;
let count2 = 0;
let cost1=0
let cost2=0

function readItem1(){
    db.collection("Products").doc("ProductList")
    .onSnapshot(function(c){   
        var image = c.data().ProductImage;               
        document.getElementById("productName1").innerHTML = c.data().ProductName;    
        document.getElementById("soldBy1").innerHTML = c.data().SoldBy;
        document.getElementById("productPrice1").innerHTML = c.data().ProductPrice;  
        document.getElementById("image1").style.backgroundImage = "url('"+image+"')";
                         
    })
}
readItem1();
function readItem2(){
    db.collection("Products").doc("ProductList2")
    .onSnapshot(function(b){   
        var image2 = b.data().ProductImage;               
        document.getElementById("productName2").innerHTML = b.data().ProductName;    
        document.getElementById("soldBy2").innerHTML = b.data().SoldBy;
        document.getElementById("productPrice2").innerHTML = b.data().ProductPrice;  
        document.getElementById("image2").style.backgroundImage = "url('"+image2+"')";
                         
    })
}
readItem2();

function myFunction1() {
var cartRef = db.collection("Cart");
    cartRef.doc("Item1").set({
       ProductName: "Handmade Necklace",
       ProductPrice:9.99,
       SoldBy: "MetalWorksBC",
       ProductAmount: count1,
    });
    
}
function myFunction2() {
var cartRef = db.collection("Cart");
    cartRef.doc("Item2").set({
       ProductName: "Knitted Scarf",
       ProductPrice:15.99,
       SoldBy: "VancouverClothes",
       ProductAmount: count2,
});
    
}

function counter1() {
    count1++;
    document.getElementById("cartCount").innerHTML = count1+count2;
    alert('Added to cart');
    }
function counter2() {
    count2++;
    document.getElementById("cartCount").innerHTML = count1+count2;
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
function readCart1(){
    db.collection("Cart").doc("Item1")
    .onSnapshot(function(c){   
        var image = c.data().ProductImage;               
        document.getElementById("cartProductName1").innerHTML = c.data().ProductName;    
        document.getElementById("cartSoldBy1").innerHTML = c.data().SoldBy;
        document.getElementById("cartProductPrice1").innerHTML = c.data().ProductPrice;  
       document.getElementById("cartProductAmount1").innerHTML = c.data().ProductAmount;  
                         
    })
    }

readCart1();
function readCart2(){
    db.collection("Cart").doc("Item2")
    .onSnapshot(function(b){   
        var image2 = b.data().ProductImage;               
        document.getElementById("cartProductName2").innerHTML = b.data().ProductName;    
        document.getElementById("cartSoldBy2").innerHTML = b.data().SoldBy;
        document.getElementById("cartProductPrice2").innerHTML = b.data().ProductPrice;  
        document.getElementById("cartProductAmount2").innerHTML = b.data().ProductAmount;  
                         
    })
}
readCart2();

function remove1(){
var cartRef = db.collection("Cart");
    cartRef.doc("Item1").update({
       ProductAmount: 0,
});
    }
function remove2(){
var cartRef = db.collection("Cart");
   cartRef.doc("Item2").update({
       ProductAmount: 0,
});
    }
function updateCart(){
db.collection("Cart").doc("Item1")
    .onSnapshot(function(c){   
        document.getElementById("cartProductAmount2").innerHTML = c.data().ProductAmount;  
                         
    })
db.collection("Cart").doc("Item2")
    .onSnapshot(function(b){   
        document.getElementById("cartProductAmount2").innerHTML = b.data().ProductAmount;  
                         
    })
    }

function plus1(){
const userRef = db.collection('Cart').doc('Item1');
const increaseBy = firebase.firestore.FieldValue.increment(1);

userRef.update({ ProductAmount: increaseBy });
    }


 function plus2(){
const userRef = db.collection('Cart').doc('Item2');
const increaseBy = firebase.firestore.FieldValue.increment(1);

userRef.update({ ProductAmount: increaseBy });
    }



function minus1(){
const userRef = db.collection('Cart').doc('Item1');
const decreaseBy = firebase.firestore.FieldValue.increment(-1);
userRef.update({ ProductAmount: decreaseBy });
    
    }


function minus2(){
const userRef = db.collection('Cart').doc('Item2');
const decreaseBy = firebase.firestore.FieldValue.increment(-1);

userRef.update({ ProductAmount: decreaseBy });
    }

function cost(){
    const cartRef1 = db.collection('Cart').doc('Item1');
       cartRef1.onSnapshot(function(c){              
        var test= c.data().ProductAmount;
               if(test == -1){
        cartRef1.update({ ProductAmount: 0 });
    
    }
    })
      const cartRef2 = db.collection('Cart').doc('Item2');
       cartRef2.onSnapshot(function(c){              
        var test= c.data().ProductAmount;
               if(test == -1){
        cartRef2.update({ ProductAmount: 0 });
        
    }
    })

}
cost();

function total(){
    const cartRef2 = db.collection('Cart').doc('Item2');
       cartRef2.onSnapshot(function(c){              
         cost2= c.data().ProductAmount;

})
const cartRef1 = db.collection('Cart').doc('Item1');
       cartRef1.onSnapshot(function(b){              
         cost1= b.data().ProductAmount;

})
    var totalCost= cost1 * 9.99 + cost2 * 15.99;
    var totalCostTax= totalCost * 1.12;
    document.getElementById("totalCost").innerHTML = totalCost.toFixed(2);
    document.getElementById("totalCostTax").innerHTML = totalCostTax.toFixed(2);
}
total();
