import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/modelos/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';
//import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
 /* isLogged:boolean = true;
  experienciaList:any[] = [];
  constructor(private datosPorfolio:PorfolioService ) { }

  ngOnInit(): void{
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      //console.log(data);
      this.experienciaList=data.experiencia;
        });   
  }
}*/
isLogged: boolean = false;
 experienciaList: Experiencia[] = [];
  constructor(private datosExper: ExperienciaService,
     private tokenService: TokenService) { 
    this.cargarExperiencia();
  }
  public cargarExperiencia():void {
    this.datosExper.listaPer(6).subscribe(data =>
       { this.experienciaList = data;
       console.log('lista de experiencias  traída de api', data); 
      });
    }
  ngOnInit(): void {
      
    if (this.tokenService.getToken()) {
      console.log(' el token es:' , this.tokenService.getToken());
      this.isLogged = true;
    } else {
      this.isLogged = false;//false con login
    }
  }

   onDeleteExp(idExperiencia : number){
      console.log('id de educacion que quiero borrar' , idExperiencia);
      if(confirm('Está seguro de borrar la edducación?')){
        this.datosExper.delete(idExperiencia).subscribe({
         next:  data => {
              this.cargarExperiencia();
          },
          error:  err => {
            this.cargarExperiencia();
            alert("Experiencia borrada");
            console.log('Error');
          }
      });
      }
}

}