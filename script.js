var mobileMenuIcon = document.getElementById("mobile-menu-icon");
var menu = document.getElementById("main-menu");

if (mobileMenuIcon){
  mobileMenuIcon.addEventListener('click',function(){
    mobileMenuIcon.classList.toggle('opened');
    menu.classList.toggle('opened');
  })
}