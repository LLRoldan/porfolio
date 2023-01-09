export class Educacion {

    id?: number;
        tituloOb : string;
        textDesc : string;
        imagLogo : string;
        certificado: string;
        descLinkSitio : string;
        personaid : number;
    linkSitio: string;

    constructor(tituloOb:string, textDesc:string, 
        imagLogo:string, certificado:string, descLinkSitio:string, personaid : number, linkSitio: string) {

        this.tituloOb = tituloOb;
        this.textDesc = textDesc;
        this.imagLogo = imagLogo;
        this.certificado = certificado;
        this.descLinkSitio = descLinkSitio;
        this.personaid = personaid;
        this.linkSitio =linkSitio;
    }
}

        //"tituloOb":"Analista en Informática Aplicada",
		//"iimagLogo":"./assets/img/logo-universidad-nacional-del-litoral-argentina-UNL.gif",
		//"textDesc":"Título obtenido en Facultad de Ingeniería e Ciencias Hidricas de la UNL",
		//"linkSitio":"https://www.unl.edu.ar",
		//"descLinkSitio":"Universidad Nacional del Litoral",
		//"certificado":""