

// document.querySelector(".nav-link").addEventListener("load",navFeedback);

// function navFeedback(){
//     document.querySelector(".nav-link").classList.add('h1')
//     console.log("hi")
// }

var togglebutton=document.getElementById("toggle-button");
var navilist=document.getElementById("navi-list");
togglebutton.addEventListener("click", menubar);

console.log(navilist)
function menubar(){
    navilist.classList.toggle('active');
    console.log("function");
}


// document.querySelectorAll('.videoPreview').forEach(function(vid) {
//     vid.onmouseover = function() {
//       this.play();
//     }
//     vid.onmouseout = function() {
//       this.load(); // stop and show poster
//     }
//   })



// "#video-holder").mouseenter(function(){
//     document.getElementById('video1').play();
// });
// ("#video-holder").mouseleave(function(){
//     document.getElementById('video1').pause();
// });
//document.querySelector('h1').classList.add('heading')

// const hamburger = document.querySelector(".menu");
// const navMenu = document.querySelector(".nav-list");

// hamburger.addEventListener("click", mobileMenu);
// console.log('hi')
// function mobileMenu() {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// }