const cartProducts = [
    {
        productID : 22,
        productName : "I phone 13 pro max",
        productUrl : "images/product-1.png",
        productPrice : 200,
        productQut : 1
    },
    {
        productID : 23,
        productName : "I phone 12 pro max",
        productUrl : "images/product-2.png",
        productPrice : 300,
        productQut : 1
    },
    {
        productID : 24,
        productName : "I phone 11 pro max",
        productUrl : "images/product-3.jpg",
        productPrice : 400,
        productQut : 1
    },
    {
        productID : 25,
        productName : "I phone 10 pro max",
        productUrl : "images/product-4.jpg",
        productPrice : 500,
        productQut : 1
    }
];
// id selector function
function id(id){
    return document.getElementById(id);
}
// data load in html template

function dataLoad(){
    const productPushId = id("product-push-id");
    productPushId.innerHTML = "";
    for(let i = 0; i<cartProducts.length ; i++){
        productPushId.innerHTML +=" <div class='cart-item'> "+
            "<div class='row'>"+
            "<div class='col-md-7 center-item'>"+
            "<img src='"+ cartProducts[i].productUrl +"' alt=''>"+
            "<h5>"+ cartProducts[i].productName +"</h5>"+
            "</div>"+
            "<div class='col-md-5 center-item'>"+
            "<div class='input-group number-spinner'>"+
                "<button onclick='minus("+ i +")'' class='btn btn-default'><i class='fas fa-minus'></i></button>"+
                "<input disabled type='number' min='0' class='quantitySet form-control text-center' value='"+ cartProducts[i].productQut +"'>"+
                "<button onclick='plus("+ i +")'' class='btn btn-default'><i class='fas fa-plus'></i></button>"+
            "</div>"+
            "<h5 class='mLeftMobile' >$<span class='price-update'>"+ cartProducts[i].productPrice * cartProducts[i].productQut +"</span></h5>"+
            "<img id='close-btn' onclick='removeProduct("+ i +")' src='images/remove.png' alt='' class='remove-item'>"+
            "</div>"+
            "</div>"+
        "</div>";
    }
    productSubtotal();
}
//  remove product from cart
function removeProduct(i){
    cartProducts.splice(i,1);
    dataLoad();
}
// product plus in to cart
function plus(i){
    if(cartProducts[i].productQut < 10){
        cartProducts[i].productQut +=1; 
        productQntSetWithPrice(cartProducts[i].productQut, i);
    }else{
        alert("OOps sorry! you will add max 10 quantity.");
    }
}
function minus(i){
    if(cartProducts[i].productQut > 1){
        cartProducts[i].productQut -=1; 
        productQntSetWithPrice(cartProducts[i].productQut, i);
    }else{
        alert("OOps sorry! you will add max 1 quantity.");
    }
}
// set quantity into cart ...
function productQntSetWithPrice(n,i){
    document.getElementsByClassName("quantitySet")[i].value = n;
    let eachProductTotalPrice = cartProducts[i].productPrice * n;
    cartProducts[i].productTotalPrice = eachProductTotalPrice ;
    document.getElementsByClassName("price-update")[i].innerText = cartProducts[i].productTotalPrice ;
    productSubtotal();
}
// subtotal setup 
function productSubtotal(){
    let sum = 0;
    for(let i=0; i<cartProducts.length;i++){
        // console.log("cart-itens");
        // console.log(cartProducts);
        sum += cartProducts[i].productQut * cartProducts[i].productPrice ;
    }
    id("totalPrice").innerText = 0 ;
    id("subtotalPrice").innerText = 0 ;
    id("totalPrice").innerText = sum ;
    id("subtotalPrice").innerText = sum ;
}

