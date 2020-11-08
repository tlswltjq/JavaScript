var mon = prompt("지금 몇 월?");

if (9<=mon&&mon<=11) {           //9<=mon<=11 처럼 쓰면 안됨 ㅇㅇ
    document.write("가을");
}
else if (6<=mon&&mon<=8) {   
    document.write("여름");
}
else if (3<=mon&&mon<=5) {
    document.write("봄");
}
else{
    document.write("겨울");
}