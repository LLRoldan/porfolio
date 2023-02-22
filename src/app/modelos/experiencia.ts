export class Experiencia {
    idExperiencia: number;
    lugardetrabajo : string;
    descripcion : string;
    periodo : string;
    cargo : string;
    imagenilustra : string;
    linkaempresa : string;
    empresa : string;
    personaid : number;

    constructor(idExperiencia: number, lugardetrabajo:string, descripcion: string, periodo: string, cargo:string, imagenilustra:string, linkaempresa:string, empresa:string,  personaid : number) {
        this.idExperiencia = idExperiencia
        this.lugardetrabajo = lugardetrabajo;
        this.descripcion = descripcion;
        this.periodo = periodo;
        this.cargo = cargo;
        this.imagenilustra = imagenilustra;
        this.linkaempresa = linkaempresa;
        this.empresa = empresa;
        this.personaid = personaid;

    }
}
