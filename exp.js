//TOUCHE 1

setTimeout(function() {
  document.querySelector(".touche1").classList.remove("inactive");
  document.querySelector(".touche1").classList.add("active");
  document.querySelector(".iconimg").classList.add("offseticon");
  setTimeout(function() {
  document.querySelector(".iconimg").classList.add("random");

  }, 1000);
  

}, 3000);
//FIN TOUCHE 1
setTimeout(function() {
  document.querySelector(".touche1").classList.add("inactive");
  document.querySelector(".touche1").classList.remove("active");
  document.querySelector(".iconimg").classList.remove("offseticon");
  document.querySelector(".iconimg").classList.remove("random");


}, 8000);
//TOUCHE 2
setTimeout(function() {
  document.querySelector(".touche2").classList.remove("inactive");
  document.querySelector(".touche2").classList.add("active");
  document.querySelector(".iconimg2").classList.add("offseticon");
  document.querySelector(".iconimg2a").classList.add("offseticon2");

  setTimeout(function() {
  document.querySelector(".iconimg2").classList.add("random");
  document.querySelector(".iconimg2a").classList.add("random2");


  }, 1000);
  

}, 10000);

//FIN TOUCHE 2
setTimeout(function() {
  document.querySelector(".touche2").classList.add("inactive");
  document.querySelector(".touche2").classList.remove("active");
  document.querySelector(".iconimg2").classList.remove("offseticon");
  document.querySelector(".iconimg2").classList.remove("random");
  document.querySelector(".iconimg2a").classList.remove("offseticon2");
  document.querySelector(".iconimg2a").classList.remove("random2");

}, 15000);

//TOUCHE 3
setTimeout(function() {
  document.querySelector(".touche3").classList.remove("inactive");
  document.querySelector(".touche3").classList.add("active");
  document.querySelector(".iconimg3").classList.add("offseticon");
  setTimeout(function() {
  document.querySelector(".iconimg3").classList.add("random");

  }, 1000);
  

}, 17000);

//FIN TOUCHE 3
setTimeout(function() {
  document.querySelector(".touche3").classList.add("inactive");
  document.querySelector(".touche3").classList.remove("active");
  document.querySelector(".iconimg3").classList.remove("offseticon");
  document.querySelector(".iconimg3").classList.remove("random");


}, 22000);
//fin instructions
setTimeout(function() {
  document.querySelector(".instructions").style.visibility = "hidden";
  document.querySelector("button").style.visibility = "hidden";

  setTimeout(function() {
  audio.play();
  
  }, 2000);

}, 25000);

const audio = new Audio("sounds/8.mp3");
audio.loop = true;
var indexvid = 1;
var indexson = 3;

// function randominit(){
//     randinit = Math.floor(Math.random() * 10);
//     if (randinit <= 3 && randinit!=0)
//     {
//         init();
//         indexvid = randinit;
//     }
//     else{
//         randominit();
//     }
// }
// function init(){
//     audio.play();
// }

function start() {
  randominit();
}

// document.addEventListener("keypress", random);
// function random(){
//     audio.pause();
// }
document.addEventListener("keydown", function(e) {
  if (e.which === 70) {
    random();
  }
  if (e.which === 86) {
    randomaudio();
  }
  if (e.which === 82) {
    randomvid();
  }
  });
function randomaudio() {
  rand = Math.floor(Math.random() * 14);
  if (rand <= 13 && rand != 0 && rand !== indexson) {
    indexson = rand;
    changeaudio();
  } else {
    randomaudio();
  }
}
function randomvid() {
  rand = Math.floor(Math.random() * 20);
  if (rand <= 19 && rand != 0 && rand !== indexvid) {
    indexvid = rand;
    changevid();
  } else {
    randomvid();
  }
}
function random() {
  rand = Math.floor(Math.random() * 20);
  if (rand <= 19 && rand != 0 && rand !== indexvid) {
    indexvid = rand;
    console.log(indexvid);

    random2();
  } else {
    random();
  }
}
function random2() {
  rand2 = Math.floor(Math.random() * 14);
  if (rand2 <= 13 && rand2 != 0 && rand2 !== indexson) {
    indexson = rand2;
    console.log(indexson);
    change();
  } else {
    random2();
  }
}

function change() {
  document.getElementById("vid").src = "vid/" + rand + ".mp4";
  document.querySelectorAll("audio").forEach((audio) => audio.pause());
  audio.pause();
  audio.currentTime = 0;
  audio.src = "sounds/" + rand2 + ".mp3";
  audio.play();
}
function changeaudio() {
  document.querySelectorAll("audio").forEach((audio) => audio.pause());
  audio.pause();
  audio.currentTime = 0;
  audio.src = "sounds/" + rand + ".mp3";
  audio.play();
}
function changevid() {
  document.getElementById("vid").src = "vid/" + rand + ".mp4";
}

function passertuto(){
  document.querySelector(".instructions").style.visibility = "hidden";
  setTimeout(function() {
  audio.play();
  document.querySelector("button").style.visibility = "hidden";
  
  }, 2000);
}