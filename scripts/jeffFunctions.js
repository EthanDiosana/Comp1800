
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;

let cost1=0;
let cost2=0;
let cost3=0;
let cost4=0;
let cost5=0;
let cost6=0;

$( document ).ready(function() {
    hide1();
    hide2();
    hide3();
    hide4();
    hide5();
    hide6();
    total();
});

function vancouver(){
    alert("test");
    var item1 = db.collection("Products").doc("ProductList1").data().City;
    var item2 = db.collection("Products").doc("ProductList2").data().City;
    var item3 = db.collection("Products").doc("ProductList3").data().City;
    var item4 = db.collection("Products").doc("ProductList4").data().City;
    var item5 = db.collection("Products").doc("ProductList5").data().City;
    var item6 = db.collection("Products").doc("ProductList6").data().City;
   
    if(item1=="Burnaby"){
        document.getElementById("index1").style.display = "none";
    }else{
        document.getElementById("index1").style.display = "block";
    }
    if(item2=="Burnaby"){
        document.getElementById("index2").style.display = "none";
    }else{
        document.getElementById("index2").style.display = "block";
    }
    if(item3=="Burnaby"){
        document.getElementById("index3").style.display = "none";
    }else{
        document.getElementById("index3").style.display = "block";
    }
    if(item4=="Burnaby"){
        document.getElementById("index4").style.display = "none";
    }else{
        document.getElementById("index4").style.display = "block";
    }
    if(item5=="Burnaby"){
        document.getElementById("index5").style.display = "none";
    }else{
        document.getElementById("index5").style.display = "block";
    }
    if(item6=="Burnaby"){
        document.getElementById("index6").style.display = "none";
    }else{
        document.getElementById("index6").style.display = "block";
    }
}
function burnaby(){
    alert("test");
    var item1 = db.collection("Products").doc("ProductList1").data().City;
    var item2 = db.collection("Products").doc("ProductList2").data().City;
    var item3 = db.collection("Products").doc("ProductList3").data().City;
    var item4 = db.collection("Products").doc("ProductList4").data().City;
    var item5 = db.collection("Products").doc("ProductList5").data().City;
    var item6 = db.collection("Products").doc("ProductList6").data().City;
    if(item1!="Burnaby"){
        document.getElementById("index1").style.display = "none";
    }else{
        document.getElementById("index1").style.display = "block";
    }
    if(item2!="Burnaby"){
        document.getElementById("index2").style.display = "none";
    }else{
        document.getElementById("index2").style.display = "block";
    }
    if(item3!="Burnaby"){
        document.getElementById("index3").style.display = "none";
    }else{
        document.getElementById("index3").style.display = "block";
    }
    if(item4!="Burnaby"){
        document.getElementById("index4").style.display = "none";
    }else{
        document.getElementById("index4").style.display = "block";
    }
    if(item5!="Burnaby"){
        document.getElementById("index5").style.display = "none";
    }else{
        document.getElementById("index5").style.display = "block";
    }
    if(item6!="Burnaby"){
        document.getElementById("index6").style.display = "none";
    }else{
        document.getElementById("index6").style.display = "block";
    }
}
function all(){
    alert("test");
    document.getElementById("index1").style.display = "block";
    document.getElementById("index2").style.display = "block";
    document.getElementById("index3").style.display = "block";
    document.getElementById("index4").style.display = "block";
    document.getElementById("index5").style.display = "block";
    document.getElementById("index6").style.display = "block"; 
    
}

function readItem1(){
    db.collection("Products").doc("ProductList1")
    .onSnapshot(function(c){   
        var image1 = c.data().ProductImage;   
        document.getElementById("productName1").innerHTML = c.data().ProductName;    
        document.getElementById("soldBy1").innerHTML = c.data().SoldBy;
        document.getElementById("productPrice1").innerHTML = c.data().ProductPrice;  
        document.getElementById("productImage1").src = image1;
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
        document.getElementById("productImage2").src = image2;
                         
    })
}
readItem2();
function readItem3(){
    db.collection("Products").doc("ProductList3")
    .onSnapshot(function(b){   
        var image3 = b.data().ProductImage;               
        document.getElementById("productName3").innerHTML = b.data().ProductName;    
        document.getElementById("soldBy3").innerHTML = b.data().SoldBy;
        document.getElementById("productPrice3").innerHTML = b.data().ProductPrice;  
        document.getElementById("productImage3").src = image3;
                         
    })
}
readItem3();
function readItem4(){
    db.collection("Products").doc("ProductList4")
    .onSnapshot(function(b){   
        var image4 = b.data().ProductImage;               
        document.getElementById("productName4").innerHTML = b.data().ProductName;    
        document.getElementById("soldBy4").innerHTML = b.data().SoldBy;
        document.getElementById("productPrice4").innerHTML = b.data().ProductPrice;  
        document.getElementById("productImage4").src = image4;
                         
    })
}
readItem4();
function readItem5(){
    db.collection("Products").doc("ProductList5")
    .onSnapshot(function(b){   
        var image5 = b.data().ProductImage;               
        document.getElementById("productName5").innerHTML = b.data().ProductName;    
        document.getElementById("soldBy5").innerHTML = b.data().SoldBy;
        document.getElementById("productPrice5").innerHTML = b.data().ProductPrice;  
        document.getElementById("productImage5").src = image5;
                         
    })
}
readItem5();
function readItem6(){
    db.collection("Products").doc("ProductList6")
    .onSnapshot(function(b){   
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
function myFunction3() {
    var cartRef = db.collection("Cart");
        cartRef.doc("Item3").set({
           ProductName: "Sourdough Bread",
           ProductPrice:4.99,
           SoldBy: "BurnabyBakers",
           ProductAmount: count3,
        });
    }
    function myFunction4() {
    var cartRef = db.collection("Cart");
        cartRef.doc("Item4").set({
           ProductName: "Strawberry Jam",
           ProductPrice:7.99,
           SoldBy: "VancityPreserves",
           ProductAmount: count4,
    });
    }
    function myFunction5() {
        var cartRef = db.collection("Cart");
            cartRef.doc("Item5").set({
               ProductName: "Knitted Toque",
               ProductPrice:12.99,
               SoldBy: "Toquecouver",
               ProductAmount: count5,
            });
        }
        function myFunction6() {
        var cartRef = db.collection("Cart");
            cartRef.doc("Item6").set({
               ProductName: "Stuffed Toy",
               ProductPrice:21.99,
               SoldBy: "Vancouver Toys",
               ProductAmount: count6,
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
    function counter3() {
        count3++;
        document.getElementById("cartCount").innerHTML = count1+count2;
        alert('Added to cart');
        }
        function counter4() {
            count4++;
            document.getElementById("cartCount").innerHTML = count1+count2;
            alert('Added to cart');
            }
            function counter5() {
                count5++;
                document.getElementById("cartCount").innerHTML = count1+count2;
                alert('Added to cart');
                }
                function counter6() {
                    count6++;
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
function readCart1(){
    db.collection("Cart").doc("Item1")
    .onSnapshot(function(c){                 
        document.getElementById("cartProductName1").innerHTML = c.data().ProductName;    
        document.getElementById("cartSoldBy1").innerHTML = c.data().SoldBy;
        document.getElementById("cartProductPrice1").innerHTML = c.data().ProductPrice;  
       document.getElementById("cartProductAmount1").innerHTML = c.data().ProductAmount;  
       document.getElementById("cartProductImage1").src = image;                 
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
        document.getElementById("cartProductImage2").src = image2;                      
    })
}
readCart2();

function readCart3(){
    db.collection("Cart").doc("Item3")
    .onSnapshot(function(c){   
        var image3 = c.data().ProductImage;               
        document.getElementById("cartProductName3").innerHTML = c.data().ProductName;    
        document.getElementById("cartSoldBy3").innerHTML = c.data().SoldBy;
        document.getElementById("cartProductPrice3").innerHTML = c.data().ProductPrice;  
       document.getElementById("cartProductAmount3").innerHTML = c.data().ProductAmount;  
       document.getElementById("cartProductImage3").src = image3;                      
    })
    }

readCart3();

function readCart4(){
    db.collection("Cart").doc("Item4")
    .onSnapshot(function(c){   
        var image4 = c.data().ProductImage;               
        document.getElementById("cartProductName4").innerHTML = c.data().ProductName;    
        document.getElementById("cartSoldBy4").innerHTML = c.data().SoldBy;
        document.getElementById("cartProductPrice4").innerHTML = c.data().ProductPrice;  
       document.getElementById("cartProductAmount4").innerHTML = c.data().ProductAmount;  
       document.getElementById("cartProductImage4").src = image4;                      
    })
    }

readCart4();

function readCart5(){
    db.collection("Cart").doc("Item5")
    .onSnapshot(function(c){   
        var image5 = c.data().ProductImage;               
        document.getElementById("cartProductName5").innerHTML = c.data().ProductName;    
        document.getElementById("cartSoldBy5").innerHTML = c.data().SoldBy;
        document.getElementById("cartProductPrice5").innerHTML = c.data().ProductPrice;  
       document.getElementById("cartProductAmount5").innerHTML = c.data().ProductAmount;  
       document.getElementById("cartProductImage5").src = image5;                      
    })
    }

readCart5();

function readCart6(){
    db.collection("Cart").doc("Item6")
    .onSnapshot(function(c){   
        var image6 = c.data().ProductImage;               
        document.getElementById("cartProductName6").innerHTML = c.data().ProductName;    
        document.getElementById("cartSoldBy6").innerHTML = c.data().SoldBy;
        document.getElementById("cartProductPrice6").innerHTML = c.data().ProductPrice;  
       document.getElementById("cartProductAmount6").innerHTML = c.data().ProductAmount;  
       document.getElementById("cartProductImage6").src = image6;                     
    })
    }

readCart6();


function remove1(){
var cartRef = db.collection("Cart");
    cartRef.doc("Item1").update({
       ProductAmount: -2,
});
    }
function remove2(){
var cartRef = db.collection("Cart");
   cartRef.doc("Item2").update({
       ProductAmount: -2,
});
    }
    function remove3(){
        var cartRef = db.collection("Cart");
           cartRef.doc("Item3").update({
               ProductAmount: -1,
        });
            }
            function remove4(){
                var cartRef = db.collection("Cart");
                   cartRef.doc("Item4").update({
                       ProductAmount: -1,
                });
                    }
                    function remove5(){
                        var cartRef = db.collection("Cart");
                           cartRef.doc("Item5").update({
                               ProductAmount: -1,
                        });
                            }
                            function remove6(){
                                var cartRef = db.collection("Cart");
                                   cartRef.doc("Item6").update({
                                       ProductAmount: -1,
                                });
                                    }

function hide1(){
    db.collection("Cart").doc("Item1")
    .onSnapshot(function(c){   
                  var item1 = c.data().ProductAmount;    
                   if(item1==-2) {
                    document.getElementById("cartItem1").style.display = "none";  
                   }
    })
    }
    function hide2(){
    db.collection("Cart").doc("Item2")
    .onSnapshot(function(c){   
                  var item1 = c.data().ProductAmount;    
                   if(item1==-2) {
                    document.getElementById("cartItem2").style.display = "none";  
                   }
    })
    }
    function hide3(){
    db.collection("Cart").doc("Item3")
    .onSnapshot(function(c){   
                  var item1 = c.data().ProductAmount;    
                   if(item1==-1) {
                    document.getElementById("cartItem3").style.display = "none";  
                   }
    })
    }
    function hide4(){
    db.collection("Cart").doc("Item4")
    .onSnapshot(function(c){   
                  var item1 = c.data().ProductAmount;    
                   if(item1==-1) {
                    document.getElementById("cartItem4").style.display = "none";  
                   }
    })
    }
    function hide5(){
    db.collection("Cart").doc("Item5")
    .onSnapshot(function(c){   
                  var item1 = c.data().ProductAmount;    
                   if(item1==-1) {
                    document.getElementById("cartItem5").style.display = "none";  
                   }
    })
    }
    function hide6(){
        db.collection("Cart").doc("Item6")
        .onSnapshot(function(c){   
                      var item1 = c.data().ProductAmount;    
                       if(item1==-1) {
                        document.getElementById("cartItem6").style.display = "none";  
                       }
        })
        }

function updateCart(){
db.collection("Cart").doc("Item1")
    .onSnapshot(function(b){   
        document.getElementById("cartProductAmount1").innerHTML = b.data().ProductAmount;  
                         
    })
db.collection("Cart").doc("Item2")
    .onSnapshot(function(b){   
        document.getElementById("cartProductAmount2").innerHTML = b.data().ProductAmount;  
                         
    })
    db.collection("Cart").doc("Item3")
    .onSnapshot(function(b){   
        document.getElementById("cartProductAmount3").innerHTML = b.data().ProductAmount;  
                         
    })
    db.collection("Cart").doc("Item4")
    .onSnapshot(function(b){   
        document.getElementById("cartProductAmount4").innerHTML = b.data().ProductAmount;  
                         
    })
    db.collection("Cart").doc("Item5")
    .onSnapshot(function(b){   
        document.getElementById("cartProductAmount5").innerHTML = b.data().ProductAmount;  
                         
    })
    db.collection("Cart").doc("Item6")
    .onSnapshot(function(b){   
        document.getElementById("cartProductAmount6").innerHTML = b.data().ProductAmount;  
                         
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

    function plus3(){
        const userRef = db.collection('Cart').doc('Item3');
        const increaseBy = firebase.firestore.FieldValue.increment(1);
        
        userRef.update({ ProductAmount: increaseBy });
            }
            function plus4(){
                const userRef = db.collection('Cart').doc('Item4');
                const increaseBy = firebase.firestore.FieldValue.increment(1);
                
                userRef.update({ ProductAmount: increaseBy });
                    }
                    function plus5(){
                        const userRef = db.collection('Cart').doc('Item5');
                        const increaseBy = firebase.firestore.FieldValue.increment(1);
                        
                        userRef.update({ ProductAmount: increaseBy });
                            }
                            function plus6(){
                                const userRef = db.collection('Cart').doc('Item6');
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
    function minus3(){
        const userRef = db.collection('Cart').doc('Item3');
        const decreaseBy = firebase.firestore.FieldValue.increment(-1);
        
        userRef.update({ ProductAmount: decreaseBy });
            }
            function minus4(){
                const userRef = db.collection('Cart').doc('Item4');
                const decreaseBy = firebase.firestore.FieldValue.increment(-1);
                
                userRef.update({ ProductAmount: decreaseBy });
                    }
                    function minus5(){
                        const userRef = db.collection('Cart').doc('Item5');
                        const decreaseBy = firebase.firestore.FieldValue.increment(-1);
                        
                        userRef.update({ ProductAmount: decreaseBy });
                            }
                            function minus6(){
                                const userRef = db.collection('Cart').doc('Item6');
                                const decreaseBy = firebase.firestore.FieldValue.increment(-1);
                                
                                userRef.update({ ProductAmount: decreaseBy });
                                    }
function cost(){
    const cartRef1 = db.collection('Cart').doc('Item1');
       cartRef1.onSnapshot(function(c){              
        var test1= c.data().ProductAmount;
               if(test1 == -1|| test1==0){
        cartRef1.update({ ProductAmount: 1 });
    
    }
    })
      const cartRef2 = db.collection('Cart').doc('Item2');
       cartRef2.onSnapshot(function(c){              
        var test2= c.data().ProductAmount;
               if(test2 == -1 || test2==0){
        cartRef2.update({ ProductAmount: 1 });
        
    }
    })
    const cartRef3 = db.collection('Cart').doc('Item3');
    cartRef3.onSnapshot(function(c){              
     var test3= c.data().ProductAmount;
            if(test3 == 0){
     cartRef3.update({ ProductAmount: 1 });
     
 }
 })

 const cartRef4 = db.collection('Cart').doc('Item4');
       cartRef4.onSnapshot(function(c){              
        var test4= c.data().ProductAmount;
               if(test4 == 0){
        cartRef4.update({ ProductAmount: 1 });
        
    }
    })

    const cartRef5 = db.collection('Cart').doc('Item5');
       cartRef5.onSnapshot(function(c){              
        var test5= c.data().ProductAmount;
               if(test5 == 0){
        cartRef5.update({ ProductAmount: 1 });
        
    }
    })

    const cartRef6 = db.collection('Cart').doc('Item6');
       cartRef6.onSnapshot(function(c){              
        var test6= c.data().ProductAmount;
               if(test6 == 0){
        cartRef6.update({ ProductAmount: 1 });
        
    }
    })

}
cost();

function total(){
    const cartRef1 = db.collection('Cart').doc('Item1');
       cartRef1.onSnapshot(function(c){              
         cost1= c.data().ProductAmount;
         price1= c.data().ProductPrice;
         if (cost1<0){
            cost1=0;
        }

})
const cartRef2 = db.collection('Cart').doc('Item2');
       cartRef2.onSnapshot(function(b){              
         cost2= b.data().ProductAmount;
         price2= b.data().ProductPrice;
         if (cost2<0){
            cost2=0;
        }

})
const cartRef3 = db.collection('Cart').doc('Item3');
       cartRef3.onSnapshot(function(b){              
         cost3= b.data().ProductAmount;
         price3= b.data().ProductPrice;
         if (cost3<0){
            cost3=0;
        }

})
const cartRef4 = db.collection('Cart').doc('Item4');
       cartRef4.onSnapshot(function(b){              
         cost4= b.data().ProductAmount;
         price4= b.data().ProductPrice;
         if (cost4<0){
             cost4=0;
         }

})
const cartRef5 = db.collection('Cart').doc('Item5');
       cartRef5.onSnapshot(function(b){              
         cost5= b.data().ProductAmount;
         price5= b.data().ProductPrice;
         if (cost5<0){
            cost5=0;
        }

})
const cartRef6 = db.collection('Cart').doc('Item6');
       cartRef6.onSnapshot(function(b){              
         cost6= b.data().ProductAmount;
         price6= b.data().ProductPrice;
         if (cost6<0){
            cost6=0;
        }
})
    var totalCost= cost1 * price1 + cost2 * price2 + cost3 * price3 + cost4 * price4 + cost5 * price5 + cost6 * price6;
    var totalCostTax= totalCost * 1.12;
    document.getElementById("totalCost").innerHTML = totalCost.toFixed(2);
    document.getElementById("totalCostTax").innerHTML = totalCostTax.toFixed(2);
}
total();
<<<<<<< HEAD

function checkOut(){
    alert('Checkout');
}
=======
>>>>>>> 1be75769088611654e2e8a2c740eead8b55fea6d
