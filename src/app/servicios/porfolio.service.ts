import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
  url:string ="http://localhost:8080/";
/*para el json
constructor() { }
obtenerDatos(){console.log("El servicio profolio se esta ejecuntando")}

*/
  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get('./assets/data/data.json');
    } 
    

}


/* para la base de datos 
constructor(private http:HttpClient) { }

obtenerDatos():Observable<any>{
  return this.http.get<any>(this.url+"persona");
 } 
  

}*/
//aca se trabaja con aPi