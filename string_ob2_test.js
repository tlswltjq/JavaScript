var  userName = prompt("당신의 영문 이름",);

var upperName = userName.toUpperCase();
document.write(upperName, "<br>");

var userNum = prompt("당신의 전화번호",);
var result = userNum.substring(0,userNum.length-4)+"****";

document.write(result);