//import { Personaje } from "./class/personaje.class";
//import { Bootcamp } from "./class/bootcamp.class";

import { Pelicula } from "./class/Pelicula.class";

//let jonas : Personaje = new Personaje('Jonas', '2019','Pistola', new Date())

//var nombre = prompt("Por favor inserte su nombre:", "Trabajador de Everis");
//var validacion = true;

//No funciona bucle
//while (validacion) {
  /* if (nombre === null) {
    alert("Por favor inserte el nombre.");
   // validacion = false;
    //break;

  } else if (nombre !== "" && isNaN(Number(nombre))) {
    let everis: Bootcamp = new Bootcamp(nombre, "Everis", [
      "Jose Soto",
      "Manuel Amaut",
    ]);
    everis.alumnos.push(nombre);
    everis.saludar();
   // break;
  }
//}

//jonas.viajar();

console.log("Adios");
 */
//let nombre =  prompt("¿Cual es su nombre")


let mib : Pelicula =  new Pelicula("Hombres de Negro", "Barry Sonnefeld", new Date("08-29-1997"), 95, true);
let punisher : Pelicula = new   Pelicula("Punisher","Jonathan Hensleigh", new Date("04/16/2004"), 124, false);

mib.presentar();

punisher.presentar();