var menuIcon = document.querySelector(".menu-icon")
var sidebar = document.querySelector(".sidebar")
var container = document.querySelector(".container")

menuIcon.onclick = function(){
    sidebar.classList.toggle("slider")
    container.classList.toggle("large-container")
}


 /* ----page-loader---- */

// var preLoader = document.querySelector("#pageloader");
// function myfunction(){
//     preLoader.style.display="none";
// }


// ----STICKY NAV----

num = 50,

$(window).bind('scroll',function (){
   if($(window).scrollTop()>num ) {
    $('header').addClass('fixed');
   }else{
    $('header').removeClass('fixed');
   }
});


$('.banner').slick({
    infinite: true,
    slidesToShow: 1, 
    slidesToScroll:1,
    arrows: false, 
    dots: true,
    speed: 500,
});