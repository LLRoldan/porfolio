import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';
import { NuevoUsuario } from '../modelos/nuevo-usuario';
import { LoginUsuario } from '../modelos/login-usuario';
import { JwtDto } from '../modelos/jwt-dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.baseUrl;
  currentUserSubject: BehaviorSubject<any>;
  constructor(private httpClient:HttpClient) {

    console.log("El servicio de autenticacion está corriendo al fin");
    this.currentUserSubject= new BehaviorSubject<any>
    (JSON.parse(sessionStorage.getItem('currentUser')||'{}'))
    
  }
  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.url + 'auth/nuevo/', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.url + 'auth/login/', loginUsuario);
  }

IniciarSesion(credenciales:any):Observable<any> {
  return this.httpClient.post(this.url, credenciales).pipe(map(data=>{
    
    sessionStorage.setItem('currentUser', 
    JSON.stringify(data));
    this.currentUserSubject.next(data);
    
    return data;
  }))
  }

get UsuarioAutenticado(){
  return this.currentUserSubject.value;
}

}
