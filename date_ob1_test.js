var today = new Date();
var nowMonth = today.getMonth()+1;
nowDate = today.getDate();
nowDay = today.getDay();

document.write("<h1>오늘 날짜 정보</h1>");
document.write("현재월 : ",nowMonth,"<br>");
document.write("현재일 : ",nowDate,"<br>");
document.write("현재요일 : ",nowDay,"<br>");

var worldCup = new Date(2002,4,31);
var theMonth = worldCup.getMonth();
theDate = worldCup.getDate();
theDay = worldCup.getDay();

document.write("<h1>월드컵 날짜 정보</h1>");
document.write("2002월드컵 몇 월 : ",theMonth,"<br>");
document.write("2002월드컵 몇 일 : ",theDate,"<br>");
document.write("2002월드컵 무슨 요일 : ",theDay,"<br>");