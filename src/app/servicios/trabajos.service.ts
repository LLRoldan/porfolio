import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Trabajos } from '../modelos/trabajos';

@Injectable({
  providedIn: 'root'
})
export class TrabajosService {

  url = environment.baseUrl;
  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Trabajos[]>{
    return this.httpClient.get<Trabajos[]>(this.url + 'trabajo/lista');
  }

  public listaPer(id: number): Observable<Trabajos[]>{
    return this.httpClient.get<Trabajos[]>(this.url + `trabajo/${id}/lista`);
  }

  public detail(id: number):Observable<Trabajos>{
  return this.httpClient.get<Trabajos>(this.url + `trabajo/detail/${id}`);  
  }

  public guardar(trabajo: Trabajos):Observable<any>{
    return this.httpClient.post<any>(this.url + 'trabajo/guardar', trabajo);
  }
 
  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `trabajo/delete/${id}`);
    }

  public edit(trabajo: Trabajos):Observable<any>{
    return this.httpClient.put<any>(this.url + 'trabajo/guardar' ,trabajo );
    }

}
