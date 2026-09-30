const A1 = document.querySelector("#a1");
const A2 = document.querySelector("#a2");
const A3 = document.querySelector("#a3");

function toggelAccordion(element){
    const content = element.querySelector(".accordion-content");
    content.classList.toggle("show");
}

function ac_1(){ toggelAccordion(A1) }
function ac_2(){ toggelAccordion(A2) }
function ac_3(){ toggelAccordion(A3) }

A1.addEventListener("click", ac_1);
A2.addEventListener("click", ac_2);
A3.addEventListener("click", ac_3);