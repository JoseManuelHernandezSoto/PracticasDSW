var data = [true, 10, false, "codigo", "herramientas", 7];
var strings = []; // Arreglo para almacenar las cadenas encontradas
var numbers = []; // Arreglo para almacenar los numeros encontrados

// Recorre los datos y guardar las cadenas de texto en un arreglo
for (var i = 0; i < data.length; i++) {
    if (typeof data[i] === "string") {
        strings.push(data[i]);
    }
}

// Recorre los datos y guardar las cadenas de texto en un arreglo
for (var i = 0; i < data.length; i++) {
    if (typeof data[i] === "number") {
        numbers.push(data[i]);
    }
}

// Verificar si se encontraron cadenas
if (strings.length > 0) {
    var longestString = strings[0]; // Asignar la primera cadena como la más larga inicialmente

    // Recorre el arreglo de las cadenas restantes y si es mas largo se cambia
        for (var j = 1; j < strings.length; j++) {
        if (strings[j].length > longestString.length) {
            longestString = strings[j];
        }
    }
    

    alert("La frase más larga en el arreglo es: " + longestString);
} else {
    alert("No se encontraron cadenas en el arreglo.");
}

var num1 = numbers[0];
var num2 = numbers[1];
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
