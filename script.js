function show(){
  document.getElementById("root").style.color="red";
  document.getElementById("root").style.fontSize="20px";
  document.getElementById("root").style.fontFamily="serif";
}
function get(){
var bluewhite=document.querySelectorAll(".blue-white");
for (var i=0;i<bluewhite.length;i++){
  bluewhite[i].style.color="white";
  bluewhite[i].style.backgroundColor="blue";
  bluewhite[i].style.fontSize="10px";
   
  }
}
function make(){
  var p=document.getElementsByTagName("p");
  for(var i=0;i<p.length;i++){
    p[i].style.fontSize="40px";
  }
}