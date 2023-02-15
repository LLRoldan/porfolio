export class Educacion {

    id?: number;
        titulo : string;
        descripcion : string;
        urlimagLogo : string;
        urlcertificado: string;
        descLinkSitioOrg : string;
        personaid : number;
        urllinkSitio: string;
        

    constructor(titulo:string, descripcion:string, 
        urlimagLogo:string, urlcertificado:string, descLinkSitioOrg:string, personaid : number, urllinkSitio: string) {

        this.titulo = titulo;
        this.descripcion = descripcion;
        this.urlimagLogo = urlimagLogo;
        this.urlcertificado = urlcertificado;
        this.descLinkSitioOrg = descLinkSitioOrg;
        this.personaid = personaid;
        this.urllinkSitio =urllinkSitio;
       
    }
}

        //"tituloOb":"Analista en Informática Aplicada",
		//"iimagLogo":"./assets/img/logo-universidad-nacional-del-litoral-argentina-UNL.gif",
		//"textDesc":"Título obtenido en Facultad de Ingeniería e Ciencias Hidricas de la UNL",
		//"linkSitio":"https://www.unl.edu.ar",
		//"descLinkSitio":"Universidad Nacional del Litoral",
		//"certificado":""