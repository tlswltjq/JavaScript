var today = new Date();
var nowYear = today.getFullYear();

var theDate = new Date(nowYear,11,31);
var diffDate = theDate.getTime() - today.getTime();

var result = Math.ceil(diffDate/(60*1000*60*24));
document.write("연말 D-day: "+ result + "일 남았습니다.");