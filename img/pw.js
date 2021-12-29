
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}


function hover(element) {
    element.setAttribute('src', 'img/second.png');
  }
  
  function unhover(element) {
    element.setAttribute('src', 'img/first.png');
  }