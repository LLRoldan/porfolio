import { Component, Directive, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { persona } from 'src/app/modelos/persona';


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
  isLogged:boolean = true;
  persona: persona = new persona("",""
  ,"","","","","","" ,"","","","","","","");

  constructor(private datosPorfolio:PorfolioService ) { }

 
  ngOnInit(): void{
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      //console.log(data);
      this.miPorfolioEnca=data;

      // para tomar solo el primer registro this.miPorfolioEnca=data[0];
        });   
  }
 
}
