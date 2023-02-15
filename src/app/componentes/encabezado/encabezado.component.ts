import { Component, Directive, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { faPen } from '@fortawesome/free-solid-svg-icons';
//import { persona } from 'src/app/modelos/persona';
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
 //unaPersona: persona []=[]
 //persona: persona = new persona("","","","","","","","" ,"","","","","","","");
 //para json
 //constructor(private datosPorfolio:PorfolioService, private tokenService: TokenService) { }
  
 //para base de datos 
  constructor(private datosPorfolio:PersonaService, private tokenService: TokenService) { }

 
  ngOnInit(): void{
 /*   this.datosPorfolio.obtenerDatos().subscribe(data =>{
      //console.log(data);
      this.miPorfolioEnca=data;

      // para tomar solo el primer registro this.miPorfolioEnca=data[0];
        });   
  }

  */
 this.cargarPersona();
 console.log("token traído: " + this.tokenService.getToken());
 console.log("variable isLogged : " + this.isLogged);

  if(this.tokenService.getToken()){
    console.log(this.tokenService.getToken());
    this.isLogged = true;
  }else{
    this.isLogged = false;
  } 
}

cargarPersona():void{
  this.datosPorfolio.detail(6).subscribe(data => 
    {this.miPorfolioEnca=data;
      console.log('muetra encabezado', data);});
}
/*
cargarUnaPersona():void{
  this.datosPorfolio.detail(7).subscribe(data1 => 
    {this.unaPersona=data1});
}
*/
}
