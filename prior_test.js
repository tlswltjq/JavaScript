var a = 10;
var b = 20;
var m = 30;
var n = 40;

var result;

result = a > b || b >= m|| m > n ;
document.write(result,"<br>");

result = a > b || b >= m|| m <= n ;
document.write(result,"<br>");

result = a <= b && b >= m&& m <= n ;
document.write(result,"<br>");

result = a <= b && b <= m&& m <= n ;
document.write(result,"<br>");

result = !(a>b);
document.write(result,"<br>");
