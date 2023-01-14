import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trabajos } from '../modelos/trabajos';

@Injectable({
  providedIn: 'root'
})
export class TrabajosService {

  url:string= "http://localhost:8080/trabajos/";
  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Trabajos[]>{
    return this.httpClient.get<Trabajos[]>(this.url + 'lista');
  }

  public listaPer(id: number): Observable<Trabajos[]>{
    return this.httpClient.get<Trabajos[]>(this.url + `persona/${id}/lista`);
  }

  public detail(id: number):Observable<Trabajos>{
  return this.httpClient.get<Trabajos>(this.url + `detail/${id}`);  
  }

  public save(trabajo: Trabajos):Observable<any>{
    return this.httpClient.post<any>(this.url + 'create', trabajo);
  }
 
  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
    }

  public edit(trabajo: Trabajos):Observable<any>{
    return this.httpClient.put<any>(this.url + 'update' ,trabajo );
    }

}
