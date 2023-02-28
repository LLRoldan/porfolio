import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { LoginUsuario } from 'src/app/modelos/login-usuario';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
 form: FormGroup;
 isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;
 
  constructor(private formBuilder: FormBuilder,
    private tokenService: TokenService,
     private authService: AuthService, 
      private ruta:Router) {

                this.form=this.formBuilder.group(
                  {   nombreUsuario:['',[Validators.required,Validators.email]],
                      password:['',[Validators.required,Validators.minLength(8)]],
                      /*deviceInfo:this.formBuilder.group({
                        deviceId: ["7168738738"],
                        deviceType: ["DEVIVE_TYPR_ANDROID"],
                        notificationToken:["544656546546546"]
                        
                      })*/
              })

  }


  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(event: Event){
    
    event.preventDefault;
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.IniciarSesion  (this.form.value).subscribe(data =>{
      console.log("DATA: " + JSON.stringify(data));})
    
    this.authService.login(this.loginUsuario)
    .subscribe({next: data =>{
      this.isLogged = true;
      this.isLogginFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUsername(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;    
      this.ruta.navigate (['/porfolio']);
      //window.location.reload();
    }, error: err => {
      this.isLogged = false;
      this.isLogginFail = true;
      this.errMsj = err.error.mensaje;
      console.log(this.errMsj);
  }});
  }

  get Email(){
    return this.form.get('nombreUsuario');//email
      }
  get Password(){
        return this.form.get('password');
      }

   /*
onEnviar(event: Event) { 
  event.preventDefault;
  this.authService.IniciarSesion  (this.form.value).subscribe(data =>{
    console.log("DATA: " + JSON.stringify(data));
    this.ruta.navigate(['/porfolio']);       
  }) 
} */
  }  
