//Cre crea el array donde se almacenan todas las imagenes
let maravillas = ["argentina.svg", "costaRica.svg", "france.svg", "kenia.svg", "peru.svg","roma.svg","rumania.svg","salvador.svg","taiwan.svg","vaticano.svg"];
let correcta = [0,0,1,1,2,2,0,1,1,1]; //se declara un arreglo llamado correcta que contiene las respuestas correctas para cada imagen


let opciones = []; //Se declara un arreglo bidimensional llamado opciones que contiene las opciones para cada pregunta.

opciones.push(["Argentina", "El Salvador", "Guatemala"]);
opciones.push(["Costa Rica", "Peru", "Taiwan"]);
opciones.push(["Kenia", "Francia", "El Vaticano"]);
opciones.push(["Rumania", "Kenia", "Taiwan"]);
opciones.push(["Costa Rica", "Argentina", "Peru"]);
opciones.push(["Taiwan", "El Vaticano", "Roma"]);
opciones.push(["Rumania", "Taiwan", "Francia"]);
opciones.push(["Guatemala", "El Salvador", "Francia"]);
opciones.push(["Rumania", "Taiwan", "Kenia"]);
opciones.push(["El Savador", "El Vaticano", "Peru"]);
/**
 * Se declaran dos variables, posActual para rastrear la posición actual en el juego 
 * (es decir, la pregunta actual), y cantidadAcertadas para contar el número de respuestas correctas durante el juego.
 */
let posActual = 0;
let cantidadAcertadas = 0;

/**
 * Se define una función llamada comenzarJuego() que establece las variables posActual 
 * y cantidadAcertadas en 0, oculta la pantalla inicial y muestra la pantalla del juego, 
 * y luego llama a la función cargarMaravilla() para cargar la primera pregunta.
 */
function comenzarJuego(){
    posActual = 0;
    cantidadAcertadas = 0;
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarMaravilla();

}

/**
 * Se define una función llamada cargarMaravilla() que carga la próxima pregunta en la 
 * pantalla de juego. Si se han mostrado todas las preguntas, llama a la función terminarJuego()
 */
function cargarMaravilla(){
    if(maravillas.length <= posActual){
        terminarJuego();
    }
    else{
        limpiarOpciones();

        document.getElementById("imgMaravilla").src = "img/" + maravillas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

/**
 * Se define una función llamada limpiarOpciones() que elimina cualquier clase de estilo aplicada
 * a las opciones de respuesta, lo que permite que se restablezca el estilo predeterminado antes 
 * de cargar nuevas opciones.
 */
function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

/** 
 * El código restante contiene funciones para comprobar las respuestas, 
 * terminar el juego, y volver al inicio. Esas funciones manipulan la visibilidad 
 * de las diferentes pantallas y aplican estilos de clase a las opciones de 
 * respuesta según la respuesta dada por el jugador.
*/
function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){//acertó
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }else{
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    setTimeout(cargarMaravilla,1000);
}
function terminarJuego(){
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = maravillas.length - cantidadAcertadas;
}

function volverAlInicio(){
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}