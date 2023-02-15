import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../modelos/persona';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = environment.baseUrl;
  //URL:string = "http://localhost:8080/persona/";

  constructor(private http: HttpClient) { }
  
  //ver personas
  public lista(): Observable<persona[]>{
    return this.http.get<persona[]>(this.URL + "persona/"+ 'lista');
  }

  //buscar una persona en especial por id
  public detail(id: number):Observable<persona>{
  return this.http.get<any>(this.URL + `persona/detail/${id}`);
  }
  
  
  //crear nueva
  public save(perso: persona):Observable<any>{
    return this.http.post<any>(this.URL + "persona/"+'create/', perso);
    }

    //borrar
  public delete(id: number):Observable<any>{
    return this.http.delete<any>(this.URL + "persona/"+`delete/${id}`);
    }

    //editar
  public edit(perso: persona):Observable<any>{
    return this.http.put<any>(this.URL + "/persona/"+'update/', perso);
    }
}