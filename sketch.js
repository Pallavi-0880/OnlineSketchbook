//  var cell= document.querySelector("#box1");
//  cell.style.backgroundColor = "red";
//cell.style.fontSize = "10px";

// var cell = document.querySelector("#box3");
// cell.style.backgroundColor = "yellow";
//divid.style.fontSize = "10px";


//var cell = document.querySelector("#box6");
//cell.style.backgroundColor = "yellow";
//cell.style.fontSize = "10px";

// var cell = document.querySelector("#box9");
// cell.style.backgroundColor = "white";
//cell.style.fontSize = "10px";

// var cell = document.querySelector("#box12");
// cell.style.backgroundColor = "white";
//cell.style.fontSize = "10px";

// var cell = document.querySelector("#box14");
// cell.style.backgroundColor = "white";

// var cell = document.querySelector("#box16");
// cell.style.backgroundColor = "white";

// var cell = document.querySelector("#box8");
// cell.style.backgroundColor = "White";



//  var parent = document.querySelector(".parent");
//  parent.setAttribute("id","box");
//  parent.style.backgroundColor = "white";
//  console.log(parent.getAttribute ("class"));


// for (let n = 0; n < 50; n++) {
//     var newDiv = document.createElement('div');
//     newDiv.classList.add = ("cell");
//     document.getElementsByClassName('newdiv').appendChild(newDiv);



// for(let n=0; n<5; n++){
//     var elm = document.createElement('div');
//     elm.id="comments";
//     document.getElementById('elm').appendChild(elm);
// }  





//  var newDiv = document.createElement("div");
//  newDiv.classList.add("cell");
//  newDiv.textContent = "Abc";
//  parent.appendChild(newDiv);

// var total = document.querySelectorAll(".cell");
//  console.log(total);


// //------------------------------DOM Event--------------------------------
// cell.addEventListener('click',changeToBlack);
// function changeToBlack(){
//   cell.style.backgroundColor = "grey";
// }

// total.forEach((div) => {
//   div.addEventListener('click', () => {
//     div.classList.toggle("clicked")
//   })
// })


// function myFunction() {
//   var element = document.getElementById("cell");
//   element.classList.toggle("cell");
// }




// total.forEach((div) => {
//     div.addEventListener('click', () => {
// div.style.backgroundColor = "yellow";
//     })
// })

// document.getElementById(
//     "try").addEventListener(
//     "mousedown", btnpressed);

//     function btnpressed() {
//         document.getElementById(
//         "try").innerHTML =
//         "button pressed.";
//     }



for (var i = 0; i < 4; i++) {
  for (var j = 0; j < 4; j++) {
    var parent = document.querySelector(".parent");
    var cell = document.createElement("div");
    cell.classList.add("cell");
    parent.appendChild(cell);
  }
}




