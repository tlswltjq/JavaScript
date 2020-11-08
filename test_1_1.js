var price1 =3000;
var price2 =6000;
var price3 =3000;


// document.write(typeof(price1));          prompt는 결과값 스트링으로 저장한다 그래서 아래처럼 하니까 숫자 다 붙어서 나옴

var total = (price1 + price2 + price3);
var result = total > 10000 ? total - 10000 + "원 초과!!!" : "돈 관리 잘 했어요!!!"

document.write(result);