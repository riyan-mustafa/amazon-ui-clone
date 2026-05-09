let slideBtnLeft = document.getElementById("slide-btn-left");
let slideBtnRight = document.getElementById("slide-btn-right");
let imgList = document.querySelector(".img-list");
let imgItem = document.querySelectorAll(".img-item");

let index = 1; // Start from 1 because we will clone slides
let slideWidth = 100;

// Clone first & last slide
let firstClone = imgItem[0].cloneNode(true);
let lastClone = imgItem[imgItem.length - 1].cloneNode(true);

// Add clones
imgList.appendChild(firstClone);
imgList.insertBefore(lastClone, imgList.firstChild);

// Total slides after clone
let slides = document.querySelectorAll(".img-item");

// Set initial position
imgList.style.transform = `translateX(-${slideWidth}%)`;

// Add transition
imgList.style.transition = "transform 0.4s ease-in-out";

// RIGHT BUTTON
slideBtnRight.addEventListener("click", () => {
    if (index >= slides.length - 1) return;
    index++;
    imgList.style.transform = `translateX(-${index * slideWidth}%)`;
});

// LEFT BUTTON
slideBtnLeft.addEventListener("click", () => {
    if (index <= 0) return;
    index--;
    imgList.style.transform = `translateX(-${index * slideWidth}%)`;
});

// Remove jump using transitionend
imgList.addEventListener("transitionend", () => {
    if (slides[index].isSameNode(firstClone)) {
        imgList.style.transition = "none";
        index = 1;
        imgList.style.transform = `translateX(-${index * slideWidth}%)`;
        setTimeout(() => {
            imgList.style.transition = "transform 0.4s ease-in-out";
        });
    }

    if (slides[index].isSameNode(lastClone)) {
        imgList.style.transition = "none";
        index = slides.length - 2;
        imgList.style.transform = `translateX(-${index * slideWidth}%)`;
        setTimeout(() => {
            imgList.style.transition = "transform 0.4s ease-in-out";

        });
    }
});

// Drop Down 

const dropdowns =document.querySelectorAll('.dropdown');
const select = document.querySelector('.select');
const caret = document.querySelector('.caret');
const menu = document.querySelector('.select-menu');
const options = document.querySelectorAll('.select-menu li');
const selected = document.querySelector('.selected');

// Open/close dropdown
select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');   // fixed
    menu.classList.toggle('menu-open');
});

// When clicking options
options.forEach(option => {
    option.addEventListener('click', () => {
        selected.innerText = option.innerText;
        select.classList.remove('select-clicked');
        caret.classList.remove('caret-rotate');
        menu.classList.remove('menu-open');

        options.forEach(opt => {
            opt.classList.remove('active');
        });

        option.classList.add('active');
    });
});

//TODAYS DEAL ITEM 
let leftBtn = document.getElementById("today-deal-btn-left");
let rightBtn = document.getElementById("today-deal-btn-right");
let list = document.querySelector(".today-deals-product-list");

let scrollAmount = 300; // how much slide moves

rightBtn.addEventListener("click", () => {
    list.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });
});

leftBtn.addEventListener("click", () => {
    list.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
    });
});


//KITCHEN DEALS JS
let leftbtn= document.getElementById("kitchen-deals-btn-left");
let rightbtn= document.getElementById("kitchen-deals-btn-right");
let listAll = document.querySelector(".kitchen-deals-product-list") ;
let scrollamount =300;

rightbtn.addEventListener("click",()=>{
    listAll.scrollBy({
        left: scrollamount,
        behavior:"smooth"
    });
});
leftbtn.addEventListener("click", ()=>{
    listAll.scrollBy({
        left: -scrollamount,
        behavior: "smooth"
    });
});

//Wireless Product

let lftBtn=document.getElementById("wireless-deal-btn-left");
let rgtBtn=document.getElementById("wireless-deal-btn-right");
let allList=document.querySelector(".wireless-deals-product-list");
let amountScroll = 300;

rgtBtn.addEventListener("click",()=>{
    allList.scrollBy({
        left: amountScroll,
        behavior:"smooth"
    });
});
lftBtn.addEventListener("click", ()=>{
    allList.scrollBy({
        left: -amountScroll,
        behavior:"smooth"
    });
});

// Computers & Accessories Deals
let leftCmptBtn=document.getElementById("computer-deal-btn-left");
let rightCmptBtn=document.getElementById("computer-deal-btn-right");
let listAllCmpt=document.querySelector(".computer-deals-product-list");
let cmptScrollAmount = 300;

rightCmptBtn.addEventListener("click",()=>{
    listAllCmpt.scrollBy({
        left: amountScroll,
        behavior:"smooth"
    });
});
leftCmptBtn.addEventListener("click", ()=>{
    listAllCmpt.scrollBy({
        left: -amountScroll,
        behavior:"smooth"
    });
});

// Seller & Book Deals
let leftbookBtn=document.getElementById("book-deal-btn-left");
let rightbookBtn=document.getElementById("book-deal-btn-right");
let listallBook=document.querySelector(".book-deals-product-list");
let bookScrollAmount = 300;

rightbookBtn.addEventListener("click",()=>{
    listallBook.scrollBy({
        left: amountScroll,
        behavior:"smooth"
    });
});
leftbookBtn.addEventListener("click", ()=>{
    listallBook.scrollBy({
        left: -amountScroll,
        behavior:"smooth"
    });
});


// Contry Deals
let leftcontryBtn=document.getElementById("contry-deal-btn-left");
let rightcontryBtn=document.getElementById("contry-deal-btn-right");
let listallContry=document.querySelector(".contry-deals-product-list");
let contryScrollAmount = 300;

rightcontryBtn.addEventListener("click",()=>{
    listallContry.scrollBy({
        left: amountScroll,
        behavior:"smooth"
    });
});
leftcontryBtn.addEventListener("click", ()=>{
    listallContry.scrollBy({
        left: -amountScroll,
        behavior:"smooth"
    });
});


//Sign In Code

function gosignIn() {
        window.location.href = "signin-page.html";
}

function gosign(){
    window.location.href = "signin-page.html"
}



     


    //SideBar
    function openSidebar(){
        document.getElementById("mySidebar").classList.add("active");
        document.getElementById("overlay").classList.add("active");
        document.body.classList.add("no-scroll");
    }
    
    function closeSidebar(){
        event.stopPropagation();
        document.getElementById("mySidebar").classList.remove("active");
        document.getElementById("overlay").classList.remove("active");
        document.body.classList.remove("no-scroll");
    }

//loop
// dropdowns.forEach(dropdown => {
//     const select =dropdown.querySelector('.select');
//     const caret = dropdown.querySelector('.caret');
//     const menu = dropdown.querySelector('.select-menu');
//     const optiions = dropdown.querySelector('.select-menu li');
//     const selected = dropdown.querySelector('.selected');

// })


// //Click Event

// const select = document.querySelector('.select');
// const caret = document.querySelector('.caret');
// const menu = document.querySelector('.select-menu');
// const options = document.querySelectorAll('.select-menu li');
// const selected = document.querySelector('.selected');

// // Open/close dropdown
// select.addEventListener('click', () => {
//     select.classList.toggle('select-clicked');
//     caret.classList.toggle('caret-rotate');   // fixed
//     menu.classList.toggle('menu-open');
// });

// // When clicking options
// options.forEach(option => {
//     option.addEventListener('click', () => {
//         selected.innerText = option.innerText;
//         select.classList.remove('select-clicked');
//         caret.classList.remove('caret-rotate');
//         menu.classList.remove('menu-open');

//         options.forEach(opt => {
//             opt.classList.remove('active');
//         });

//         option.classList.add('active');
//     });
// });
 