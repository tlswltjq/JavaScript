var count = 0;

myFnc();

function myFnc() {
    count++;
    document.write("hello" + count,"<br>");
}

myFnc();

var theFnc = function(){
    count++;
    document.write("bye" + count,"<br>");
}

theFnc();