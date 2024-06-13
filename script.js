/*document.getElementById('menu-icon').addEventListener('click', function() {
    var navbar = document.getElementById('navbar');
    if (navbar.classList.contains('hidden')) {
        navbar.classList.remove('hidden');
    } else {
        navbar.classList.add('hidden');
    }
});*/

function openNav() {
    document.getElementById("navbar").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("navbar").style.width = "0";
  }