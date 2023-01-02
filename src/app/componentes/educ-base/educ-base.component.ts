import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { faPen } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-educ-base',
  templateUrl: './educ-base.component.html',
  styleUrls: ['./educ-base.component.css']
})
export class EducBaseComponent implements OnInit {

    miPorfolio:any;
    pencilIcon = faPen;
    educacionList:any;
    constructor(private datosPorfolio:PorfolioService ) { }
  
    ngOnInit(): void{
      this.datosPorfolio.obtenerDatos().subscribe(data =>{
        //console.log(data);
        this.educacionList=data.educacion;
          });   
    }
}
