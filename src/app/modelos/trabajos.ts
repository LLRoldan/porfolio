export class Trabajos {
    id?:number;
    tituloproyecto:string;
    descripcion:string;
    linkcaptura:string;
    linkaproyecto:string;
    personaid:number;

    constructor(tituloproyecto:string,  descripcion:string, 
        linkcaptura:string, linkaproyecto:string, personaid:number) {
        this.tituloproyecto = tituloproyecto;
        this.descripcion = descripcion;
        this.linkcaptura = linkcaptura;
        this.linkaproyecto = linkaproyecto;
        this.personaid = personaid;
    }
}

