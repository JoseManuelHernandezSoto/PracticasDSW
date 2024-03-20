var weekDays = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
console.log(weekDays);
weekDays.splice(0,1);
console.log(weekDays);
weekDays.unshift("Lunes");
weekDays.push("Hola PP");
console.log(weekDays);
weekDays[7] = "Hola Armando Caza"
console.log(weekDays);

var i = 0;
var total = 0;
var string = "";
while(i<=5){

    total += i;
    string += i+" + "; 
    i++
}
console.log("la suma de "+string+" es = "+total);

var number = 5;
var fac = 1;
do{

 fac *= number;

 number--;
}while(number>0);
console.log("El factorial  es = "+fac);

for (var i=0; i<7; i++){
    if(i != 3){
        console.log("Hola");
    }

    if(i == 3){
        console.log("Soy el 4to Hola");
    }
}

console.log("Acabamos de saludar");