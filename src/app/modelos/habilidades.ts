export class Habilidades {
    id?: number;
    habilidad : string;
    porcenta : number;    
    personaid : number;

    constructor(habilidad:string, porcenta: number, 
        personaid : number) {
        this.habilidad = habilidad;
        this.porcenta = porcenta;
        this.personaid = personaid;
}


}
