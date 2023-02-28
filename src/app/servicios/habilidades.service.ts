import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Habilidades } from '../modelos/habilidades';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {
  url = environment.baseUrl;
  constructor(private httpClient:HttpClient) { }


  public lista(): Observable<Habilidades[]>{
    return this.httpClient.get<Habilidades[]>
    (this.url + 'habil/lista');
  }

  public listaPer(id: number): Observable<Habilidades[]>{
    return this.httpClient.get<Habilidades[]>
    (this.url + `habil/${id}/lista`);
  }

  public detail(id: number):Observable<Habilidades>{
  return this.httpClient.get<Habilidades>
  (this.url + `habil/detail/${id}`);  
  }

  public create(Habilidades: Habilidades):Observable<any>{
    return this.httpClient.post<any>
    (this.url + 'habil/create', Habilidades);
    }

  public edit(Habilidades: Habilidades):Observable<any>{
      return this.httpClient.put<any>
      (this.url + 'habil/update', Habilidades);
      }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>
    (this.url + `habil/delete/${id}`);
    }


}