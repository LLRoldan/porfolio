import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../modelos/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url:string= "http://localhost:8080/experiencia";

  constructor(private httpC:HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.httpC.get<Experiencia[]>(this.url + 'lista');
  }

  public listaPer(id: number): Observable<Experiencia[]>{
    return this.httpC.get<Experiencia[]>(this.url + `persona/${id}/lista`);
  }

  public detail(id: number):Observable<Experiencia>{
  return this.httpC.get<Experiencia>(this.url + `detail/${id}`);
  }

  public save(experiencia: Experiencia):Observable<any>{
    return this.httpC.post<any>(this.url + 'create', experiencia);
    }

  public edit(experiencia: Experiencia):Observable<any>{
    return this.httpC.put<any>(this.url + 'update', experiencia);
    }

  public delete(id: number):Observable<any>{
    return this.httpC.delete<any>(this.url + `delete/${id}`);
    }

  
}