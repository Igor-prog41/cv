window.onload = function () {
  var textTask = "";

  if (localStorage.getItem('listToDo') !== null) {
    textTask = localStorage.getItem('listToDo');
    document.getElementById('out').innerHTML = textTask;
  }

  document.getElementById('addTask').onclick = function () {
    if (document.getElementById("newTask").value !== "") {
      textTask +='<div class="tod"> <input class="checkForClean" type="checkbox">'+ document.getElementById("newTask").value + '</div>';
      document.getElementById("newTask").value = "";
      document.getElementById('out').innerHTML = textTask;
      localStorage.setItem('listToDo', textTask);
    }
  }
  document.getElementById("cleanTasks").onclick = function () {

    var arrayForCheck = document.getElementsByClassName('checkForClean');
    var listToDoOnPage = document.getElementsByClassName('tod');
    textTask = "";

    for (let i = 0; i < arrayForCheck.length; i++) {
   
      if (arrayForCheck[i].checked == false) {
        textTask += listToDoOnPage[i].outerHTML;
      };    
    };

    localStorage.setItem('listToDo', textTask);
    document.getElementById('out').innerHTML = textTask;
  }

  //  OPERATIONS WITH MENU

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
    document.location.href = "./index.html";
  }
  document.getElementById("second page").onclick = function () {
    document.location.href = "../math/index.html";
  }
  document.getElementById("third page").onclick = function () {
    document.location.href = "../clock/index.html";
  }
  document.getElementById("fourth page").onclick = function () {
    document.location.href = "../slider/index.html";
  }
  document.getElementById("practice_dttn").onclick = function () {
    document.location.href = "../practice_bttn/index.html";
  }
}