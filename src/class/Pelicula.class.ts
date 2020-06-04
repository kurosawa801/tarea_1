
export class Pelicula {
    constructor( public nombre : string, public director: string, public estreno : Date, public duracion: number, public familiar :Boolean) {
        
    }

    /**
     * presentar
     */
    public presentar() {
 
      
         let horas =  (num: number) =>  ((<any>num/60).toFixed(2)).replace(".",":");    

         let apto = (apt = Boolean) => (<any>apt ==true) ? " y es apta para toda la familia." : "."
         
        const impresion = `${this.nombre} fue dirigida por ${this.director}. Tiene una duracion de ${horas(this.duracion)} se estrenó en ${(this.estreno).getFullYear()} ${apto(<any>this.familiar)} <br><br>`
        

            document.write(impresion)
            console.log(impresion)

    }
}