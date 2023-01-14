import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidades } from '../modelos/habilidades';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {
  url: string= "http://localhost:8080/habilidades/";
  constructor(private httpClient:HttpClient) { }


  public lista(): Observable<Habilidades[]>{
    return this.httpClient.get<Habilidades[]>
    (this.url + 'lista');
  }

  public listaPer(id: number): Observable<Habilidades[]>{
    return this.httpClient.get<Habilidades[]>
    (this.url + `persona/${id}/lista`);
  }

  public detail(id: number):Observable<Habilidades>{
  return this.httpClient.get<Habilidades>
  (this.url + `detail/${id}`);  
  }

  public save(Habilidades: Habilidades):Observable<any>{
    return this.httpClient.post<any>
    (this.url + 'create', Habilidades);
    }

  public edit(Habilidades: Habilidades):Observable<any>{
      return this.httpClient.put<any>
      (this.url + 'update', Habilidades);
      }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>
    (this.url + `delete/${id}`);
    }


}