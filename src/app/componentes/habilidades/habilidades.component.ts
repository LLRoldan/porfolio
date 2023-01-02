import { Component, OnInit } from '@angular/core';

import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  miPorfolio:any;
  pencilIcon = faPen;
  habilidadesList:any;

  
  constructor(private datosPorfolio:PorfolioService ) { }

  ngOnInit(): void{
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      //console.log(data);
      this.habilidadesList=data.habilidades;
        });   
  }
}

