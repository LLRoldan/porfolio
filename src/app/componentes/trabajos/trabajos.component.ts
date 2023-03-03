import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { TokenService } from 'src/app/servicios/token.service';
import { TrabajosService } from 'src/app/servicios/trabajos.service';
@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {
  isLogged:boolean = false;
  trabajosList:any[] = [];
 
  constructor(private datosTrabajo:TrabajosService ,
    private tokenService: TokenService ) {     this.cargarTrabajo();
    }
    public cargarTrabajo():void {
      this.datosTrabajo.listaPer(6).subscribe(data =>
         { this.trabajosList = data;
         console.log('lista de trabajos traída de api', data); 
        });
      }

  ngOnInit(): void{
    if (this.tokenService.getToken()) {
      console.log(' el token es:' , this.tokenService.getToken());
      this.isLogged = true;
    } else {
      this.isLogged = false;
    } 
  }

  onDeleteTrab(idTrabajos: number){
    console.log('id de trabajo que quiero borrar' ,idTrabajos);
    if(confirm('Está seguro de borrar un trabajo realizado?')){
      this.datosTrabajo.delete(idTrabajos).subscribe({
       next:  data => {
            this.cargarTrabajo();
        },
        error:  err => {
          this.cargarTrabajo();
          alert("Trabajo borrado");
          console.log('Error');
        }
    });
    }
}
}
