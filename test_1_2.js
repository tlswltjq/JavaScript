var sell1 = 1200;
var sell2 = 1300;
var sell3 = 1000;
var avg = (sell1 + sell2 + sell3)/3;
var q = prompt("4분기 판매량",);

var sell4 = Number(q);

var result = sell4 >= avg ? "판매량이 평균 이상입니다." : "판매량이 평균 미만입니다."

document.write(result);