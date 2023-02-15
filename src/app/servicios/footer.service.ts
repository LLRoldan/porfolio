import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { persona } from '../modelos/persona';



@Injectable({
  providedIn: 'root'
})
export class FooterService {

  URL = environment.baseUrl;
  

  constructor(private http: HttpClient) { }
  
  public lista(): Observable<persona[]>{
    return this.http.get<persona[]>(this.URL + 'persona/new');
  }

  public detail(id: number):Observable<persona>{
  return this.http.get<persona>(this.URL + `persona/detail/${id}`);
  }

  public save(perso: persona):Observable<any>{
    return this.http.post<any>(this.URL + 'persona/create', perso);
    }

  public delete(id: number):Observable<any>{
    return this.http.delete<any>(this.URL + `persona/delete/${id}`);
    }

  public edit(perso: persona):Observable<any>{
    return this.http.put<any>(this.URL + 'persona/update', perso);
    }
}