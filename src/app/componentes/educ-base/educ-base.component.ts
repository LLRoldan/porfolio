import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/modelos/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { TokenService } from 'src/app/servicios/token.service'

@Component({
  selector: 'app-educ-base',
  templateUrl: './educ-base.component.html',
  styleUrls: ['./educ-base.component.css']
})
export class EducBaseComponent implements OnInit {
  isLogged: boolean = true;
 
  // para json    constructor(private datosPorfolio:PorfolioService )  {}


  constructor(private datosEduc: EducacionService, private tokenService: TokenService) { }
  
  educacionList: Educacion[] = [];
    
  ngOnInit(): void {
  
    /*para json
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.educacionList=data.educacion;
        });   */


    this.cargarEduca();

    if (this.tokenService.getToken()) {
      console.log(' el token es:' , this.tokenService.getToken());
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  public cargarEduca():void {
    this.datosEduc.listaPer(6).subscribe(data =>
       { this.educacionList = data   ;
       console.log('lista de educaciones traída de api', data); 
       console.log('lista de educaciones traída de api', this.educacionList);
      });
    }



}

