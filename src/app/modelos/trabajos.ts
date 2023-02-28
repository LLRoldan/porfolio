export class Trabajos {
    idTrabajos?:number;
    tituloproyecto:string;
    descripcion:string;
    linkcaptura:string;
    linkaproyecto:string;
    personaid:number;

    constructor(idTrabajos: number, tituloproyecto:string,  descripcion:string, 
        linkcaptura:string, linkaproyecto:string, personaid:number) {
        this.idTrabajos = idTrabajos;
        this.tituloproyecto = tituloproyecto;
        this.descripcion = descripcion;
        this.linkcaptura = linkcaptura;
        this.linkaproyecto = linkaproyecto;
        this.personaid = personaid;
    }
}

