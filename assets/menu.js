let close1 = document.querySelector('.close-menu');
let hamburgerMenu = document.querySelector('.menu');
let toogleMenu = document.querySelector('.toggle-menu');
let navBar = document.querySelector('.navbar');
let visibility = document.querySelector('.visivel')

toogleMenu.addEventListener('click', function() {

   hamburgerMenu.classList.toggle('active') ;
   close1.classList.toggle('active') ;
   navBar.classList.toggle('active');
   visibility.classList.toggle('active')

})