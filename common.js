let callButton = document.getElementsByClassName("call")[0];
let phonemodal = document.getElementsByClassName("phonemodal")[0];
callButton.onclick = function () {
    phonemodal.style.transform = "translateY(0) scale(1)";
    phonemodal.style.opacity = 1;
  }
  phonemodal.onclick = function () {
    phonemodal.style.transform = "translateY(100%) scale(0)";
    pnonemodal.style.opacity = 0; 
  }
  phonemodal.children[0].onclick = function (event) {
    event.stopPropagation();
  }