export class persona {
  id?: number;
  nombre: string;
  apellido: string;
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
  educacion: Array<any>;



  constructor(
    id:number,
    nombre: string,
    apellido: string,
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
    educacion :  Array <any>
 
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
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
    this.educacion = educacion;
    
}
}