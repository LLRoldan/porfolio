export class Experiencia {
    id?: number;
    lugardetrabajo : string;
    periodo : string;
    cargo : string;
    imagenilustra : string;
    linkaempresa : string;
    empresa : string;
  
    personaid : number;

    constructor(lugardetrabajo:string, periodo: string, cargo:string, imagenilustra:string, linkaempresa:string, empresa:string,  personaid : number) {
        this.lugardetrabajo = lugardetrabajo;
        this.periodo = periodo;
        this.cargo = cargo;
        this.imagenilustra = imagenilustra;
        this.linkaempresa = linkaempresa;
        this.empresa = empresa;
        this.personaid = personaid;
    }
}

//"lugardetrabajo":"UNL",
//"cargo":"Ayudante de Laboratorio Informática",
//cargo":"Ayudante",
//"periodo":"2000-2001",
//"linkaempresa":"unl.edu.ar"
