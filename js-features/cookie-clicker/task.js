 const cookie = document.getElementById("cookie");
 const clicks = document.getElementById("clicker__counter");
 const counter = document.getElementById("counter");
 cookie.className = "king_size_cookie";
 

 //var audio = new Audio('audio_file.mp3');
 //audio.play();
 let clicked = false;
 cookie.onclick = function() {
   if(!clicked) {
     let startTime = new Date().getTime();
     let timerId = setInterval(function() {
     let total = (new Date().getTime() - startTime) / 1000;
     if (total < 100) {
       counter.textContent = (Number(clicks.textContent) / total).toFixed(1);
       clicked = true;
     } 
     }, 1)
   };

   clicks.textContent++;

   if(clicks.textContent >=28 ) {
    cookie.src = "last.gif";
    setTimeout(function(){
      cookie.className = "king_size_cookie_last"}, 100);
      cookie.className = "king_size_cookie";
      alert('the cookie is cracked');
      alert('your speed is ' + counter.textContent + " clicks/sec")
   } else if(clicks.textContent >=24) {
    cookie.src = "seven.gif";
    setTimeout(function(){
      cookie.className = "king_size_cookie_seven"}, 100);
      cookie.className = "king_size_cookie";
   } else if(clicks.textContent >=20) {
    cookie.src = "six.gif";
    setTimeout(function(){
      cookie.className = "king_size_cookie_six"}, 100);
      cookie.className = "king_size_cookie";
   } else if(clicks.textContent >=16) {
    cookie.src = "five.gif";
    setTimeout(function(){
      cookie.className = "king_size_cookie_five"}, 100);
      cookie.className = "king_size_cookie";
   } else if(clicks.textContent >=12) {
    cookie.src = "four.gif";
    setTimeout(function(){
      cookie.className = "king_size_cookie_four"}, 100);
      cookie.className = "king_size_cookie";
   } else if(clicks.textContent >=8) {
     cookie.src = "three.gif";
     setTimeout(function(){
      cookie.className = "king_size_cookie_three"}, 100);
      cookie.className = "king_size_cookie";
   } else if(clicks.textContent >=4) {
     cookie.src = "two.gif";
     setTimeout(function(){
       cookie.className = "king_size_cookie_two"}, 100);
       cookie.className = "king_size_cookie";
   } else if(clicks.textContent >=0) {
    cookie.src = "two.gif";
    setTimeout(function(){
      cookie.className = "king_size_cookie_one"}, 100);
      cookie.className = "king_size_cookie";
  } 
 }
 