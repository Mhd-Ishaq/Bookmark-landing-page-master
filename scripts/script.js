"use strict";


const ulEl = document.querySelectorAll("li");
const liEl = document.getElementById("li-1");
const liEl1 = document.getElementById("li-2");
const liEl2 = document.getElementById("li-3");
const tab2 = document.getElementById("tab-2");
const tab1 = document.getElementById("tab-1");
const tab3 = document.getElementById("tab-3");


for(let liElements of ulEl){
  liElements.addEventListener("click",(e)=>{
    for( let liElement of ulEl){
      liElement.classList.remove("active");
    };
    e.target.classList.add("active");
    if(e.target === liEl1){
      tab1.style.display ="none";
      tab3.style.display ="none";
      tab2.style.display ="flex";
    }
    else if(e.target === liEl2){
      tab1.style.display ="none";
      tab2.style.display ="none";
      tab3.style.display ="flex";
    }
    else{
      tab1.style.display ="flex";
      tab2.style.display ="none";
      tab3.style.display ="none";
    }
  })
};


const modal = document.getElementById("modal");
const modal1 = document.getElementById("modal-1");
const modal2 = document.getElementById("modal-2");
const modal3 = document.getElementById("modal-3");
const btnClick = document.getElementById("arrow");
const btnClick1 = document.getElementById("arrow-1");
const btnClick2 = document.getElementById("arrow-2");
const btnClick3 = document.getElementById("arrow-3");

btnClick.addEventListener("click",()=>{
  modal.classList.toggle("show");
});
btnClick1.addEventListener("click",()=>{
  modal1.classList.toggle("show");
});
btnClick2.addEventListener("click",()=>{
  modal2.classList.toggle("show");
});
btnClick3.addEventListener("click",()=>{
  modal3.classList.toggle("show");
});

const btnToggle = document.getElementById("btn-toggle");
const mobileNav = document.getElementById("mobile-ul");
const mobileClose = document.getElementById("close-ul");

btnToggle.addEventListener("click", ()=>{
  mobileNav.classList.add("show");
});
mobileClose.addEventListener("click", ()=>{
  mobileNav.classList.remove("show");
});



