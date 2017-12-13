document.addEventListener('DOMContentLoaded', example)
function example(){

var select=document.querySelector('select');

//create an array with all organized definitions:
var meanings = document.querySelectorAll('.mean');

function showMeaning(){
  //hide all definitions:
  for (var i = 0; i < meanings.length; i++) {
    meanings[i].style.display='none';
  }

//select item and show its definition:
  meanings[select.selectedIndex].style.display='block';

}
showMeaning();

//when selected item changes, call function showMeaning:
select.addEventListener('change', showMeaning);




}
