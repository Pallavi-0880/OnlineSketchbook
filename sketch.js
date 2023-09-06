var divid = document.querySelector("#box1");
divid.style.backgroundColor = "yellow";
divid.style.fontSize = "10px";

var divid = document.querySelector("#box3");
divid.style.backgroundColor = "brown";
divid.style.fontSize = "10px";


var divid = document.querySelector("#box6");
divid.style.backgroundColor = "red";
divid.style.fontSize = "10px";

var divid = document.querySelector("#box9");
divid.style.backgroundColor = "green";
divid.style.fontSize = "10px";

var divid = document.querySelector("#box12");
divid.style.backgroundColor = "pink";
divid.style.fontSize = "10px";

var divid = document.querySelector("#box14");
divid.style.backgroundColor = "red";

var divid = document.querySelector("#box16");
divid.style.backgroundColor = "purple";

var divid = document.querySelector("#box8");
divid.style.backgroundColor = "yellow";



var parent = document.querySelector(".parent");
parent.setAttribute("id","box");
parent.style.backgroundColor = "blue";
console.log(parent.getAttribute ("class"));

var newDiv = document.createElement("div");
newDiv.classList.add("divid");
newDiv.textContent = "Abc";
parent.appendChild(newDiv);

var total = document.querySelectorAll(".divid");
console.log(total);



