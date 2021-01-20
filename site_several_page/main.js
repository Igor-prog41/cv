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
    document.location.href = "./index.html";
  }
  document.getElementById("first page").onclick = function () {
    document.location.href = "./todo/index.html";
  }
  document.getElementById("second page").onclick = function () {
    document.location.href = "./math/index.html";
  }
  document.getElementById("third page").onclick = function () {
    document.location.href = "./clock/index.html";
  }
  document.getElementById("fourth page").onclick = function () {
    document.location.href = "./slider/index.html";
  }
  document.getElementById("practice_dttn").onclick = function () {
    document.location.href = "./practice_bttn/index.html";
  }
}