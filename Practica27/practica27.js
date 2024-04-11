function calificaciones(){
    let materias = ['Español','Matematicas','Fisica','Quimica','Historia','Civismo','Deportes','Técnologia'];

    let calificaciones = [];
    calificaciones.push(parseInt(document.getElementById('cal1').value));
    calificaciones.push(parseInt(document.getElementById('cal2').value));
    calificaciones.push(parseInt(document.getElementById('cal3').value));
    calificaciones.push(parseInt(document.getElementById('cal4').value));
    calificaciones.push(parseInt(document.getElementById('cal5').value));
    calificaciones.push(parseInt(document.getElementById('cal6').value));
    calificaciones.push(parseInt(document.getElementById('cal7').value));
    calificaciones.push(parseInt(document.getElementById('cal8').value));
    
    let prom = 0;
    let string=``;
    for(let i = 0; i < materias.length; i++){
        if(calificaciones[i] >=85){
            string += `En ${materias[i]} has sacado ${calificaciones[i]} estas exento del ordinario.\n`; 
        }else{
            string += `En ${materias[i]} has sacado ${calificaciones[i]} presentas ordinario.\n`;
        }
        prom += calificaciones[i];
    }
    prom = prom / materias.length; 
    string += `Tienes un promedio de ${prom}`;
    alert(string);
}

document.getElementById('btnSummit').addEventListener('click', function(event) {
    // Detenemos el envío del formulario
    event.preventDefault();

    // Validamos los campos
    let formValido = validarCampos();

    // Si los campos son válidos, enviamos el formulario
    if (formValido) {
        calificaciones();
    } else {
        // Si los campos no son válidos, mostramos un mensaje de error o realizamos alguna otra acción
        alert('Por favor, completa todos los campos antes de enviar el formulario.');
    }
});

function validarCampos() {
    // Obtenemos todos los campos de entrada
    let campos = document.querySelectorAll('input[type="number"]');

    // Iteramos sobre los campos para verificar si están llenos
    for (let campo of campos) {
        if (!campo.value) {
            // Si encontramos un campo vacío, retornamos falso
            return false;
        }
    }
    
    // Si todos los campos están llenos, retornamos verdadero
    
    return true;
}