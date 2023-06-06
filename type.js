var n1 = document.getElementById("num1");
var n2 = document.getElementById("num2");
var res = document.getElementById("result");

function add(){
    num1 = Number(n1.value);
    num2 = Number(n2.value);
    var res = num1+num2
    document.getElementById("result").value = res;
}
function sub(){
    num1 = Number(n1.value);
    num2 = Number(n2.value);
    var res = num1-num2
    document.getElementById("result").value = res ;
}
function mul(){
    num1 = Number(n1.value);
    num2 = Number(n2.value);
    var res = num1*num2
    document.getElementById("result").value = res ;
}
function div(){
    num1 = Number(n1.value);
    num2 = Number(n2.value);
    var res = num1/num2
    document.getElementById("result").value = res;
}

