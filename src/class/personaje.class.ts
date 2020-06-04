

export class Personaje{ 

constructor(
    public nombre : string,
    public epoca : string,
    public arma : string,
    public nacimiento : Date
){
}

 viajar(){
      console.log( this.nombre +" has traveled to " +this.epoca +" with a "+this.arma +" in " +this.nacimiento);
 }}