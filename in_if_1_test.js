var id = "tlswltjq";
var pw = "1234";

var user_id = prompt("아이디는");
var user_pw = prompt("비번은");

if (user_id == id) {
    if (user_pw == pw) {
        document.write("로그인 됨");
    }
    else{
        alert("비밀번호 오류");
        location.reload();
    }
}
else{
    alert("아이디 오류");
    location.reload();
}