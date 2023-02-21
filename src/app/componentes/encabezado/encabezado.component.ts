import { Component,  OnInit } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { TokenService } from 'src/app/servicios/token.service'
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
  
})
export class EncabezadoComponent implements OnInit {
  miPorfolioEnca:any;
  pencilIcon = faPen;
  element = false;
  mostrarboton = true;
  isLogged:boolean = false;
  constructor(private datosPorfolio:PersonaService,
     private tokenService: TokenService) { 
      
      this.cargarPersona();
    }

      public cargarPersona():void{
        this.datosPorfolio.detail(6).subscribe(edata => 
          {this.miPorfolioEnca = edata;
            console.log('muetra encabezado', edata);});
           }

 
  ngOnInit(): void{
 console.log("token traído: " + this.tokenService.getToken());
 console.log("variable isLogged : " + this.isLogged);

  if(this.tokenService.getToken()){
    console.log(this.tokenService.getToken());
    this.isLogged = true;
  }else{
    this.isLogged = true; //truen con login
  } 
}



}
