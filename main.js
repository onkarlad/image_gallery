
var get_all = document.getElementById("all");
var get_nature = document.getElementById("nature");
var get_fashion = document.getElementById("fashion");
var get_wedding = document.getElementById("wedding");
get_portfolio_items = document.querySelector(".portfolio_items")

get_nature.addEventListener("click",function(){
    get_all.classList.remove("active");
    get_fashion.classList.remove("active");
    get_wedding.classList.remove("active");
    get_nature.classList.add("active");

    get_portfolio_items.innerHTML="<div class='item'><img src='./images/n8.jpg'  width='100' height='100' ></div><div class='item'><img src='./images/n7.jpg'  width='100' height='100' ></div><div class='item'><img src='./images/n6.jpg'  width='100' height='100' ></div><div class='item'><img src='./images/n5.jpg'  width='100' height='100' ></div><div class='item'><img src='./images/n4.jpg'  width='100' height='100' ></div><div class='item'><img src='./images/n3.jpg'  width='100' height='100' ></div><div class='item'><img src='./images/n2.jpg'  width='100' height='100' ></div><div class='item'><img src='./images/n1.jpg'  width='100' height='100' ></div><div class='item'><img src='./images/p3.jpg'  width='100' height='100' ></div><div class='item '><img src='./images/p2.jpg'width='100' height='100' ></div><div class='item '><img src='./images/p4.jpg' alt='nature image' width='100' height='100'></div></div><div class='item '><img src='./images/p6.jpg' alt='nature image' width='100' height='100'></div>"
});

get_fashion.addEventListener("click",function(){
    get_all.classList.remove("active");
    get_nature.classList.remove("active");
    get_wedding.classList.remove("active");
    get_fashion.classList.add("active")

    get_portfolio_items.innerHTML="<div class='item'><img src='./images/f5.jpg'  width='100' height='100' ></div><div class='item'><img src='./images/f4.jpg'  width='100' height='100' ></div><div class='item'><img src='./images/f3.jpg'  width='100' height='100' ></div><div class='item'><img src='./images/f2.jpg'  width='100' height='100' ></div><div class='item'><img src='./images/f1.jpg'  width='100' height='100' ></div><div class='item'><img src='./images/p5.jpg'  width='100' height='100' ></div><div class='item '><img src='./images/s5.jpg'width='100' height='100' ></div><div class='item '><img src='./images/s4.jpg' alt='nature image' width='100' height='100'></div></div><div class='item '><img src='./images/s2.jpg' alt='nature image' width='100' height='100'></div><div class='item'><img src='./images/s3.jpg'  width='100' height='100' ></div>"
})


get_wedding.addEventListener("click",function(){
    get_all.classList.remove("active");
    get_nature.classList.remove("active");
    get_fashion.classList.remove("active");
    get_wedding.classList.add("active")

    get_portfolio_items.innerHTML="<div class='item'><img src='./images/w5.jpg'  width='100' height='100' ></div><div class='item'><img src='./images/w4.jpg'  width='100' height='100' ></div><div class='item'><img src='./images/w3.jpg'  width='100' height='100' ></div><div class='item'><img src='./images/w2.jpg'  width='100' height='100' ></div><div class='item'><img src='./images/w1.jpg'  width='100' height='100' ></div><div class='item'><img src='./images/p7.jpg'  width='100' height='100' ></div>"
})

get_all.addEventListener("click",function(){
    get_fashion.classList.remove("active");
    get_nature.classList.remove("active");
    get_wedding.classList.remove("active");
    get_all.classList.add("active");

    get_portfolio_items.innerHTML="<div class='item'><img src='./images/n1.jpg'  width='100' height='100' ></div><div class='item '><img src='./images/f1.jpg'width='100' height='100' ></div><div class='item '><img src='./images/w1.jpg' alt='nature image' width='100' height='100'></div></div><div class='item '><img src='./images/n2.jpg' alt='nature image' width='100' height='100'></div><div class='item'><img src='./images/f2.jpg'  width='100' height='100' ></div><div class='item '><img src='./images/w2.jpg'width='100' height='100' ></div><div class='item '><img src='./images/n3.jpg' alt='nature image' width='100' height='100'></div><div class='item '><img src='./images/f3.jpg' alt='nature image' width='100' height='100'></div><div class='item '><img src='./images/w3.jpg' alt='nature image' width='100' height='100'></div>"
})




