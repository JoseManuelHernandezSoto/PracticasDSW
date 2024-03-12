// Creamos un arreglo vacío para almacenar los días de la semana
var weekDays = [];

// Capturamos los días de la semana
for (var i = 0; i < 7; i++) {
    var day = prompt("Ingrese el día de la semana:"); // Pedimos al usuario que ingrese el día
    weekDays.push(day); // Agregamos el día al arreglo
}

// Creamos un string con los días capturados
var daysCapture = "Los días capturados son: " + weekDays.join(", ");

// Mostramos los días capturados en un alert
alert(daysCapture);
