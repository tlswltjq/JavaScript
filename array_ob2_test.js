var arr_1 =["사당", "교대", "방배", "강남"];
var arr_2 =["신사", "압구정", "옥수"];

var result = arr_1.join("-");
console.log(result);

result = arr_1.concat(arr_2);
console.log(result);

result = arr_1.slice(1,3);
console.log(result);

arr_1.sort();
console.log(arr_1);

arr_2.reverse();
console.log(arr_2);
