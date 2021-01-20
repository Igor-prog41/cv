window.onload = function () {
    let reloadBttn = document.querySelector("#reload");
    let modalShow = document.querySelector('#modalShow');
    let modalHide = document.querySelector("#modalHide");
    let modalChangeStile = document.querySelector("#modalChangeStile");
    let modalWindow = document.querySelector(".modalWindow");
    let modalChangeSizeWidth = document.querySelector("#modalChangeSizeWidth");
    let modalChangeSizeHeight = document.querySelector("#modalChangeSizeHeight");
    let stateStyle = true;
    let stateWidth = true;
    let stateHeight = true;

    function show() {
        modalWindow.style.display = "block";
    }

    function hide() {
        modalWindow.style.display = "none";
    }

    function ChangeStile() {
        if (stateStyle == true) {
            modalWindow.style.borderWidth = '5px';
            modalWindow.style.borderRadius = '80px';
            stateStyle = false;
        }
        else {
            modalWindow.style.borderWidth = '1px';
            modalWindow.style.borderRadius = '20px';
            stateStyle = true;
        }
    }

    function ChangeSizeWidth() {
        if (stateWidth == true) {
            modalWindow.style.width = '300px';
            stateWidth = false;
        }
        else {
            modalWindow.style.width = '200px';
            stateWidth = true;
        }
    }

    function ChangeSizeHeight() {
        if (stateHeight == true) {
            modalWindow.style.height = '500px';
            stateHeight = false;
        }
        else {
            modalWindow.style.height = '300px';
            stateHeight = true;
        }
    }



    function reload() {
        location.reload();
    }

    modalShow.onclick = show;
    modalHide.onclick = hide;
    modalChangeStile.onclick = ChangeStile;
    modalChangeSizeWidth.onclick = ChangeSizeWidth;
    modalChangeSizeHeight.onclick = ChangeSizeHeight;
    reloadBttn.onclick = reload;


 //MENU------------------------------------------------------------------------



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
      document.location.href = "./index.html";
    }
    document.getElementById("fourth page").onclick = function () {
      document.location.href = "../slider/index.html";
    }
    document.getElementById("practice_dttn").onclick = function () {
      document.location.href = "../practice_bttn/index.html";
    }
}