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


// ----STICKY NAV----

// num = 50,

// $(window).bind('scroll',function (){
//    if($(window).scrollTop()>num ) {
//     $('header').addClass('fixed');
//    }else{
//     $('header').removeClass('fixed');
//    }
// });


$('.banner').slick({
    infinite: true,
    slidesToShow: 1, 
    slidesToScroll:1,
    arrows: false, 
    dots: true,
    speed: 500,
});

var figure = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}


// ----dropdown----

$('.dropdown img').on('click',function(){
    $('dropmenu a').slideToggle(280);
  });
  

  var colors = ["red" , "green", "blue"]
for (let color of colors) {
  
  (colors);
}

//   ----file choosen---

const fileUploader = document.getElementById('dropmenu');

fileUploader.addEventListener('change', (event) => {
  const files = event.target.files;
  console.log('files', files);
  
  for (const file of files) {
    const name = file.name;
    const type = file.type ? file.type : 'NA';
    const size = file.size;
    const lastModified = file.lastModified;
    console.log({file, name, type, size, lastModified});
    
    const feedback = document.getElementById('feedback');
    const msg = ` File Name: ${name} <br/>
              File Size: ${size} <br/>
              File type: ${type} <br/>
              File Last Modified: ${new Date(lastModified)}`;
              
    feedback.innerHTML = msg;
  }
});