function myFunction() {
    var x = document.getElementById('user');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function myFloors() { //pisos
    var x = document.getElementById('piso');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function mySpaces() { //pisos espacios internos
    var x = document.getElementById('spaces2');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function mySpacesOut() { //pisos espacios externos
    var x = document.getElementById('spaces3');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
//select
$(document).ready(function() {
   $('select').material_select();
 });
 //dropdown menu
 $( document ).ready(function(){
     $(".dropdown-button").dropdown();
 });
