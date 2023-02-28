export class Habilidades {
    idHabilidad?: number;
    nombreHabilidad : string;
    nivel : number;    
    personaid : number;

    constructor(idHabilidad : number, nombreHabilidad:string, nivel: number, personaid: number) {
        this.idHabilidad = idHabilidad;
        this.nombreHabilidad = nombreHabilidad;
        this.nivel = nivel;
        this.personaid = personaid;
}


}
