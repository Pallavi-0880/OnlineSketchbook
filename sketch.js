var divid = document.querySelector("#box1");
divid.style.backgroundColor = "white";
//divid.style.fontSize = "10px";

var divid = document.querySelector("#box3");
divid.style.backgroundColor = "white";
//divid.style.fontSize = "10px";


var divid = document.querySelector("#box6");
divid.style.backgroundColor = "white";
//divid.style.fontSize = "10px";

var divid = document.querySelector("#box9");
divid.style.backgroundColor = "white";
//divid.style.fontSize = "10px";

var divid = document.querySelector("#box12");
divid.style.backgroundColor = "white";
//divid.style.fontSize = "10px";

var divid = document.querySelector("#box14");
divid.style.backgroundColor = "white";

var divid = document.querySelector("#box16");
divid.style.backgroundColor = "white";

var divid = document.querySelector("#box8");
divid.style.backgroundColor = "White";



 var parent = document.querySelector(".parent");
 parent.setAttribute("id","box");
 parent.style.backgroundColor = "white";
 console.log(parent.getAttribute ("class"));

// var newDiv = document.createElement("div");
// newDiv.classList.add("divid");
// newDiv.textContent = "Abc";
// parent.appendChild(newDiv);

 var total = document.querySelectorAll(".divid");
 console.log(total);


//------------------------------DOM Event--------------------------------
//divid.addEventListener('click',changeToBlack);
//function changeToBlack(){
 //   divid.style.backgroundColor = "grey";
//}

total.forEach((div)=>{
    div.addEventListener('click',()=>{
        div.style.backgroundColor = "grey";
    })
})



