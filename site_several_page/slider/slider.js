window.onload = function () {
    document.getElementById("menu").innerHTML =
    '<div><button class="menuBut" id="main page" >Main Page</button></div>'
    + '<div><button class="menuBut" id="first page" >List ToDo</button></div>'
    + '<div><button class="menuBut" id="second page">Math Game</button></div>'
    + '<div><button class="menuBut" id="third page"> Clock With Arrow</button></div>'
    + '<div><button class="menuBut" id="fourth page">Slider</button></div>'
    + '<div><button class="menuBut" id="practice_dttn">Practice 1</button></div>';
  
    document.querySelector('#menu').onmouseover = menuShow;
    document.querySelector('#menu').onmouseout = menuHide;
  
    document.onkeydown = function (event) {
      if (event.code == "Escape") menuHide();
      if (event.code == "KeyM") menuShow();
    }
  
    function menuShow() {
      document.querySelector('#menu').style.left = 0;
    }
    function menuHide() {
      document.querySelector('#menu').style.left = '-230px';
    }
  
    document.getElementById("main page").onclick = function () {
      document.location.href = "../index.html";
    }
    document.getElementById("first page").onclick = function () {
      document.location.href = "../todo/index.html";
    }
    document.getElementById("second page").onclick = function () {
      document.location.href = "../math/index.html";
    }
    document.getElementById("third page").onclick = function () {
      document.location.href = "../clock/index.html";
    }
    document.getElementById("fourth page").onclick = function () {
      document.location.href = "./index.html";
    }
    document.getElementById("practice_dttn").onclick = function () {
      document.location.href = "../practice_bttn/index.html";
    }
}
  



// SLIDER

var polosaElement = ['<img id="img1" src="img/iconfinder_1_avatar_2754574.png" alt="icon">'
, '<img src="img/iconfinder_9_2694135.png" alt="icon">'
, '<img src="img/iconfinder_42-Detective_4715007.png" alt="icon">'
, '<img src="img/iconfinder_28-man_4715002.png" alt="icon">'
, '<img src="img/iconfinder_FI02_20226.png" alt="icon">'
, '<img src="img/iconfinder_girl_female_woman_avatar_4043251.png" alt="icon">'
, '<img src="img/iconfinder_male_628288.png" alt="icon">'];

function buildingPolosa(firstElement) {
  document.getElementById("polosa").innerHTML = '';
  for (i = 0; i < 7; i++) {

    document.getElementById("polosa").innerHTML += polosaElement[firstElement];
    firstElement = firstElement + 1;
    if (firstElement > 6) { firstElement = 0; }
  }
}



var left = 0;

// function SliderLeft() {
//   var polosa = document.getElementById('polosa');
//   left = left - 128;
//   if (left < -512) {
//     left = 0;
//   }
//   polosa.style.left = left + 'px';
// }
// var sliderPosition = 1;

function poloseStyleLeft ( left ) {
  document.getElementById('polosa').classList.remove('muving');
  polosa.style.left = left + 'px';
}


function SliderLeft() {

  var polosa = document.getElementById('polosa');

  left = left - 128;
  if (left < -768) {
    document.getElementById('polosa').classList.add('muving');
    polosa.style.left = left + 'px';
    left = 0;
    setTimeout(poloseStyleLeft, 1000, left);
  }
  else {
    document.getElementById('polosa').classList.add('muving');
    polosa.style.left = left + 'px';
  }
}



function SliderRight() {
  var polosa = document.getElementById('polosa');

  left = left + 128;
  if (left > 0) {
    document.getElementById('polosa').classList.add('muving');
    polosa.style.left = left + 'px';
    left = -768;
    setTimeout(poloseStyleLeft, 1000, left);
  }
  else {
    document.getElementById('polosa').classList.add('muving');
    polosa.style.left = left + 'px';
  }
 
}

