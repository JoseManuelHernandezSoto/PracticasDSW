//Cre crea el array donde se almacenan todas las imagenes
let maravillas = ["chichen-itza.svg", "coliseo.svg", "cristo-redentor.svg", "machu-picchu.svg", "muralla-china.svg","petra.svg","taj-mahal.svg"];
let correcta = [1,0,2,1,2,0,1]; //se declara un arreglo llamado correcta que contiene las respuestas correctas para cada imagen


let opciones = []; //Se declara un arreglo bidimensional llamado opciones que contiene las opciones para cada pregunta.

opciones.push(["Machu Picchu", "Chichen Itza", "Coliseo"]);
opciones.push(["Coliseo", "Petra", "Cristo Redentor"]);
opciones.push(["Muralla China", "Taj Mahal", "Cristo Redentor"]);
opciones.push(["Petra", "Machu Picchu", "Taj Mahal"]);
opciones.push(["Chichen Itza", "Petra", "Muralla China"]);
opciones.push(["Petra", "Machu Pichu", "Chichen Itza"]);
opciones.push(["Coliseo", "Taj Mahal", "Cristo Redentor"]);

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