$(document).ready(function(){

    $('#hamburger-icon').click(function(){
        let hamburgerMenu = document.querySelector('#hamburger-menu');
        if (hamburgerMenu.style.display === "block") {
          hamburgerMenu.style.display = "none";
        } else {
          hamburgerMenu.style.display = "block";
        }
    });
});