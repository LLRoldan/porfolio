import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../modelos/educacion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
 
  url = environment.baseUrl;
  constructor(private httpClient:HttpClient) { }

    public lista(): Observable<Educacion[]>{
      return this.httpClient.get<Educacion[]>(this.url + 'educ/lista');
    }

    public listaPer(id: number): Observable<Educacion[]>{
      return this.httpClient.get<Educacion[]>(this.url + `educ/${id}/lista`);
    }
 
    public detail(id: number):Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.url + `educ/detail/${id}`);
    }
  
    public save(Eeduc: Educacion):Observable<any>{
      return this.httpClient.post<any>(this.url + 'create', Eeduc);
      }
  
    public edit(Eeduc: Educacion):Observable<any>{
      return this.httpClient.put<any>(this.url + 'update', Eeduc);
      }
  
    public delete(id: number):Observable<any>{
      return this.httpClient.delete<any>(this.url + `delete/${id}`);
      }

  
}