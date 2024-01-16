const paper = document.getElementById("paper")

const square1 = document.getElementById("square-1");
const square2 = document.getElementById("square-2");
const square3 = document.getElementById("square-3");
const square4 = document.getElementById("square-4");
const square5 = document.getElementById("square-5");
const square6 = document.getElementById("square-6");
const square7 = document.getElementById("square-7");
const square8 = document.getElementById("square-8");

square1.addEventListener("click", function(){
    paper.style.backgroundColor = "#FFB6C1";
});

square2.addEventListener("click", function(){
    paper.style.backgroundColor = "#90EE90";
});

square3.addEventListener("click", function(){
    paper.style.backgroundColor = "#1E90FF";
});

square4.addEventListener("click", function(){
    paper.style.backgroundColor = "#CD853F";
});

square5.addEventListener("click", function(){
    paper.style.color = "#FFB6C1";
});

square6.addEventListener("click", function(){
    paper.style.color = "#90EE90";
});

square7.addEventListener("click", function(){
    paper.style.color = "#1E90FF";
});

square8.addEventListener("click", function(){
    paper.style.color = "#CD853F";
});