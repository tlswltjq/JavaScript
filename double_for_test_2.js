
//function table(tr, td) {
    var num =1;     //테이블 안에 입력 될 숫자
    
// }

var tr = prompt("몇행");
var td = prompt("몇열");


document.write("<table border = 1>");
for(var i = 1; i <=tr;i++){
    document.write("<tr>");
    for(var k = 1; k <= td; k ++){
        document.write("<td>",num,"</td>");
        num++;
   }
   document.write("</tr>");
}
document.write("</table>");
