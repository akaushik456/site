var menuIcon = document.querySelector(".menu-icon")
var sidebar = document.querySelector(".sidebar")
var container = document.querySelector(".container")

menuIcon.onclick = function(){
    sidebar.classList.toggle("slider")
    container.classList.toggle("large-container")
}


 /* ----page-loader---- */

var preLoader = document.querySelector("#pageloader");
function myfunction(){
    preLoader.style.display="none";
}