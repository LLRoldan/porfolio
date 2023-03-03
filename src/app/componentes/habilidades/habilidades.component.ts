import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  isLogged:boolean = false;
  miPorfolio:any[] = [];
  pencilIcon = faPen;
  habilidadesList:any;

  /*
  constructor(private datosPorfolio:PorfolioService ) { }

  ngOnInit(): void{
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      //console.log(data);
      this.habilidadesList=data.habilidades;
        });   
  }
 */
constructor(private datosHabil: HabilidadesService,
     private tokenService: TokenService) { 
    this.cargarHabilidad();
  }
  public cargarHabilidad():void {
    this.datosHabil.listaPer(6).subscribe(data =>
       { this.habilidadesList = data;
       console.log('lista de habilidades traída de api', data); 
      });
    }
  ngOnInit(): void {
      
    if (this.tokenService.getToken()) {
      console.log(' el token es:' , this.tokenService.getToken());
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

   onDeleteExp(idHabilidad: number){
      console.log('id de educacion que quiero borrar' , idHabilidad);
      if(confirm('Está seguro de borrar la edducación?')){
        this.datosHabil.delete(idHabilidad).subscribe({
         next:  data => {
              this.cargarHabilidad();
          },
          error:  err => {
            this.cargarHabilidad();
            alert("Habilidad borrada");
            console.log('Error');
          }
      });
      }
}



}

