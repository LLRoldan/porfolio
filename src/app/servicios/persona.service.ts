import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../modelos/persona';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL:string = "http://localhost:8080/persona/";

  constructor(private http: HttpClient) { }
  
  public lista(): Observable<persona[]>{
    return this.http.get<persona[]>(this.URL + 'new');
  }

  public detail(id: number):Observable<persona>{
  return this.http.get<persona>(this.URL + `detail/${id}`);
  }

  public save(perso: persona):Observable<any>{
    return this.http.post<any>(this.URL + 'create', perso);
    }

  public delete(id: number):Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`);
    }

  public edit(perso: persona):Observable<any>{
    return this.http.put<any>(this.URL + 'update', perso);
    }
}