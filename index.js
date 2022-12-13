function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    // document.querySelector("nav").style.top = "0";
    document.querySelector("nav").style.backgroundColor = "var(--green)";
  } else {
    // document.querySelector("nav").style.top = "-60px";
    document.querySelector("nav").style.backgroundColor = "transparent";
  }
}
const nav = document.querySelector('.links')
function toggle() {
    nav.classList.toggle('show')

}
window.onscroll = function() {scrollFunction()};



