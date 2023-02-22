import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../modelos/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url = environment.baseUrl;

  constructor(private httpC:HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.httpC.get<Experiencia[]>(this.url + 'expe/lista');
  }

  public listaPer(id: number): Observable<Experiencia[]>{
    return this.httpC.get<Experiencia[]>(this.url + `expe/${id}/lista`);
  }

  public detail(id: number):Observable<Experiencia>{
  return this.httpC.get<Experiencia>(this.url + `expe/detail/${id}`);
  }

  public save(experiencia: Experiencia):Observable<any>{
    return this.httpC.post<any>(this.url + 'expe/create/', experiencia);
    }

  public edit(experiencia: Experiencia):Observable<any>{
    return this.httpC.put<any>(this.url + 'expe/update/', experiencia);
    }

  public delete(id: number):Observable<any>{
    return this.httpC.delete<any>(this.url + `expe/delete/${id}`);
    }

  
}