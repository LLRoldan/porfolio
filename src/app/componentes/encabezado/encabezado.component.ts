import { Component,  OnInit } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { TokenService } from 'src/app/servicios/token.service'
import { PersonaService } from 'src/app/servicios/persona.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
  
})
export class EncabezadoComponent implements OnInit {
  miPorfolioEnca:any;

  element = false;
  mostrarboton = true;
  isLogged:boolean = true;
  constructor(private datosPorfolio:PersonaService,
     private tokenService: TokenService) { 
      console.log('muetra encabezadossdfsdfsdfsin nada');
      this.cargarPersona();
    }

      public cargarPersona():void{
        this.datosPorfolio.detail(6).subscribe(edata => 
          {this.miPorfolioEnca = edata;
            console.log('muetra encabezado', edata);
            console.log('muetra encabezadosin nada');
          
          });
           }

 
  ngOnInit(): void{
  console.log("token traído mostrado en encabzado: " + this.tokenService.getToken());
  console.log("variable isLogged : " + this.isLogged);

  

  if(this.tokenService.getToken()){
    console.log(this.tokenService.getToken());
    this.isLogged = true;
  }else{
    this.isLogged = false; //truen con login
  } 
}

onDeletePerfil(id: number){
  console.log('id del Perfil que quiero borrar',id);
  if(confirm('Está seguro de borrar los datos del perfil?')){
    this.datosPorfolio.delete(id).subscribe({
     next:  data => {
          this.cargarPersona();
      },
      error:  err => {
        this.cargarPersona();
        alert("Educación borrada");
        console.log('Error');
      }
  });
  }
}

}
