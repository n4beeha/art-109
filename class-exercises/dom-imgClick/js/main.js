console.log("Survivors");

let  pageTitle = document.querySelector("#page-title");
let bodyFill =  document.querySelector("body");

//javascript timeout changes h1 title after 3 seconds
setTimeout(function(){
pageTitle.style.color = "pink";
}, 3000);

// Click event on header changes background color
document.querySelector("header").onclick = function(){
    //console.log("clicked header");
   bodyFill.style.backgroundColor = "black";
}