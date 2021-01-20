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
    document.location.href = "./index.html";
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

  //MATH GAME  PAGE ------------------------------------------------------------------------



  let startButton = document.querySelector("#startMath");
  let blockGame = document.querySelector("#game");
  let stateBG = true;

  function cleanPage() {
    if (stateBG == true) {
      document.body.style.backgroundImage = "none";
      blockGame.style.display = "block";
      stateBG = false;
    }
    else {
      document.body.style.backgroundImage = "";
      blockGame.style.display = "none";
      stateBG = true;
    }
  }

  function hideGame() {
    blockGame.style.display = "none";
  }


  startButton.onclick = cleanPage;
  
  hideGame();


  //MATH GAME WORK -----------------------------------------------

  //  var prNum, tempOut;
  let prNum = Math.floor((Math.random() * 10) + 1);
  let guessBttn = document.querySelector('#guessBttn');


  console.log(guessBttn);
  function f1() {
    var num, out, tempOut;


    num = document.getElementById('mynum').value;
    out = document.getElementById('out');
    //tempOut = document.getElementById("temp-out")

    if (num == prNum) {
      out.innerHTML = "you are guess";
    }
    else if (num > prNum) {
      out.innerHTML = "your Number is biger";
    }
    else {
      out.innerHTML = "your Number is less";
    }
    //tempOut.innerHTML = prNum;
  }

  guessBttn.onclick = f1;
 

}

