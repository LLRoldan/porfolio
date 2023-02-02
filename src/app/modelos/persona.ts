export class persona {
  id?: number;
  nombrePersona: string;
  apellidoPersona: string;
  titulo: string;
  domicilio: string;
  ubicacion: string;
  telefono: string;
  email: string;
  
  urlfacebook: string;  
  urlinstagram: string;
  urllinkedin: string;
  urlbaner: string;
  urlabatar: string;
  expertoEnprimero: string;
  expertoEnsegundo: string;
  expertoEntercero: string;

  constructor(
    nombrePersona: string,
    apellidoPersona: string,
    titulo: string,
    domicilio: string,
    ubicacion: string,
    telefono: string,
    email: string,
      
    urlfacebook: string,
    urlinstagram: string,
    urllinkedin: string,
    urlbaner: string,
    urlabatar: string,
    expertoEnprimero: string,
    expertoEnsegundo: string,
    expertoEntercero: string,
  ) {
    this.nombrePersona = nombrePersona;
    this.apellidoPersona = apellidoPersona;
    this.titulo = titulo;
    this.domicilio = domicilio;
    this.ubicacion = ubicacion;
    this.telefono = telefono;
    this.email = email;
    
    this.urlfacebook = urlfacebook;
    this.urlinstagram = urlinstagram;
    this.urllinkedin = urllinkedin;
    this.urlbaner = urlbaner;
    this.urlabatar = urlabatar;
    this.expertoEnprimero = expertoEnprimero;
    this.expertoEnsegundo = expertoEnsegundo;
    this.expertoEntercero = expertoEntercero;
}
}