document.write("<h1>가위, 바위, 보</h1>");

var user = prompt("가위, 바위, 보, 선택");
var gameNum;

switch (user) {
    case "가위":
        gameNum = 1;
        break;
    case "바위":
        gameNum = 2;
        break;
    case "보" :
        gameNum = 3;
        break;
    default :
        alert("ㄴㄴ");
        location.reload();
}

var com = Math.ceil(Math.random()*3);

if (com ==gameNum) {
    document.write("맞춤")
}
else{
    document.write("못맞춤")
}