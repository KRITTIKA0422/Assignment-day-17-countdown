"use strict";
const wishy=document.createElement("div");
wishy.id="countdown";
function callbackHell(){
  setTimeout(function(){wishy.innerHTML= "10";},1000);
  setTimeout(function(){wishy.innerHTML="9";},2000);
  setTimeout(function(){wishy.innerHTML ="8";},3000);
  setTimeout(function(){wishy.innerHTML ="7";},4000);
  setTimeout(function(){wishy.innerHTML ="6";},5000);
  setTimeout(function(){wishy.innerHTML ="5";},6000);
  setTimeout(function(){wishy.innerHTML ="4";},7000);
  setTimeout(function(){wishy.innerHTML ="3";},8000);
  setTimeout(function(){wishy.innerHTML ="2";},9000);
  setTimeout(function(){wishy.innerHTML ="1";},10000);
  setTimeout(function(){wishy.innerHTML ="Happy Independence Day";},11000);
}
document.body.appendChild(wishy);
callbackHell();





  