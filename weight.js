var name = prompt("이름을 입력해주세요",);
var cm = prompt("키를 입력해주세요",);
var kg = prompt("몸무게를 입력해주세요",);
var goodKg = (cm-100)*0.9;

document.write("신장: ", cm, "(cm)<br>");
document.write("체중: ", kg, "(kg)<br>");
document.write("적정 체중: ","(", cm, "-100) * 0.9 = ", goodKg, "(kg)<br>");
document.write("결과: 적정 체중은 ", cm, "이며, 현재 적정 체중에서 ", kg-goodKg,"kg 초과한 것을 알 수 있습니다.<br>");
