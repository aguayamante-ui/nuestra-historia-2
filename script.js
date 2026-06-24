let fecha = new Date("June 25, 2026 18:00:00").getTime();


setInterval(function(){


let ahora = new Date().getTime();


let distancia = fecha - ahora;



let dias = Math.floor(distancia/(1000*60*60*24));

let horas = Math.floor((distancia%(1000*60*60*24))/(1000*60*60));

let minutos = Math.floor((distancia%(1000*60*60))/(1000*60));

let segundos = Math.floor((distancia%(1000*60))/1000);



document.getElementById("contador").innerHTML =

dias+" días "+horas+" horas "+minutos+" minutos "+segundos+" segundos";


},1000);




function mostrarCupon(){


document.getElementById("premio").innerHTML=

"❤️ Cupón válido para Dani ❤️<br><br>"+
"🎟️ Actividad 1: Una cita especial juntos<br>"+
"🎟️ Actividad 2: Una actividad elegida por ti<br>"+
"🎟️ Actividad 3: Un día completo dedicado a nosotros";


}
