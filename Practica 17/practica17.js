var num1 = 5;
var num2 = 6;
var total = 0;

function add(num1,num2) {
    return num1 + num2;
}

function sub(num1,num2) {
    return num1 - num2;
}

function mul(num1,num2) {
    return num1 * num2;
}

function div(num1,num2) {
    return num1 / num2;
}

alert("La suma de "+num1+" + "+num2+" = "+add(num1,num2)+
    "\n La resta de "+num1+" - "+num2+" = "+sub(num1,num2)+
    "\n La multiplicacion "+num1+" x "+num2+" = "+mul(num1,num2)+
    "\n La divicion "+num1+" / "+num2+" = "+div(num1,num2));