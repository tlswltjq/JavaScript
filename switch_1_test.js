var site = prompt("즐겨 사용하는 검색 엔진");
var url;

switch(site){
    case "구글" :
        url = "www.google.com";
        break;
    case "네이버" :
        url = "www.naver.com";
        break;
    case "다음" :
        url = "www.daum.net";
        break;
    case "네이트" :
        url = "www.nate.com";
        break;
    default :
        alert("보기에 없음");
}
if(url !== undefined){
    location.href = "http://" + url;
}
// if(url !== undefined){
//     document.write(url);
// }