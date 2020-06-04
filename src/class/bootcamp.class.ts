

 export class Bootcamp{

    constructor(
        public nombre : string,
        public empresa : string,
        public alumnos : string[]
        ){
    }

    
    saludar(){

        var i;

        document.write(`Bienvenido, ${this.nombre}. Bienvenido al Bootcamp de ${this.empresa}!. ` + "<br />")
        document.write("Lista de Alumnos: <br />")
        for(i = 0; i<this.alumnos.length; i++){

        document.write(this.alumnos[i] + "<br />")

        }

        console.log(`Bienvenido, ${this.nombre}. Bienvenido al Bootcamp de ${this.empresa}!. `)
        console.log("Lista de Alumnos: ")
        console.log(this.alumnos)
    }


}

