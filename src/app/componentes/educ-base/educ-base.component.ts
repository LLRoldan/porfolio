import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/modelos/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';



@Component({
  selector: 'app-educ-base',
  templateUrl: './educ-base.component.html',
  styleUrls: ['./educ-base.component.css']
})
export class EducBaseComponent implements OnInit {
  isLogged: boolean = true;
  educacionList: Educacion[] = [];
  constructor(private datosEduc: EducacionService,
     private tokenService: TokenService) { 
    this.cargarEduca();
  }
  public cargarEduca():void {
    this.datosEduc.listaPer(6).subscribe(data =>
       { this.educacionList = data;
       console.log('lista de educaciones traída de api', data); 
      });
    }
  ngOnInit(): void {
      
    if (this.tokenService.getToken()) {
      console.log(' el token es:' , this.tokenService.getToken());
      this.isLogged = true;
    } else {
      this.isLogged = true;//false con login
    }
  }

   onDeleteEdu(idEducacion: number){
      console.log('id de educacion que quiero borrar' ,idEducacion);
      if(confirm('Está seguro de borrar la edducación?')){
        this.datosEduc.delete(idEducacion).subscribe({
         next:  data => {
              this.cargarEduca();
          },
          error:  err => {
            this.cargarEduca();
            alert("Educación borrada");
            console.log('Error');
          }
      });
      }
}

}