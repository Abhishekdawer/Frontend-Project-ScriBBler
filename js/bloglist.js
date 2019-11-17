var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("si");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// ****************MODAL2*********MODAL2
var modal1 = document.getElementById("myModal1");

// Get the button that opens the modal
var btn1 = document.getElementById("su");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}
// *************
var sp=document.getElementById("redirect");
sp.onclick=function()
{
  modal.style.display = "none";
  modal1.style.display = "block";
}
// **************************************************
var modal3 = document.getElementById("myModal3");
// Get the button that opens the modal
var btn31 = document.getElementsByClassName("abc1");
// Get the <span> element that closes the modal
var span3 = document.getElementById("na");

// When the user clicks on the button, open the modal
//  btn31[0].onclick=function() {
//   modal3.style.display = "block";
// }
btn31[0].onclick=function() {
  modal3.style.display = "block";
 }
btn31[1].onclick=function() {
 modal3.style.display = "block";
}
btn31[2].onclick=function() {
 modal3.style.display = "block";
}
btn31[3].onclick=function() {
 modal3.style.display = "block";
}
btn31[4].onclick=function() {
 modal3.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
}
// ********************
var btn32=document.getElementsByClassName("fa");
btn32[0].onclick=function(){
  window.location.href='post.html';
}
btn32[1].onclick=function(){
  window.location.href='post.html';
}
btn32[2].onclick=function(){
  window.location.href='post.html';
}
btn32[3].onclick=function(){
  window.location.href='post.html';
}
btn32[4].onclick=function(){
  window.location.href='post.html';
}
