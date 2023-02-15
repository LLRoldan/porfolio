import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { TokenService } from 'src/app/servicios/token.service'
import { FooterService } from 'src/app/servicios/footer.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  Porfoliofoot:any;
  isLogged:boolean = true;
  //constructor(private datosPorfolio:PorfolioService ) { }

  constructor(private datosPorfolioFoot:FooterService, private tokenService: TokenService) { }

  ngOnInit(): void{

  /*para el json
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      //console.log(data);
      this.Porfoliofoot=data;
        });   
  }*/
  this.cargarPersona();
  if(this.tokenService.getToken()){
    this.isLogged = true;
  }else{
    this.isLogged = false;
  }
}

cargarPersona():void{
  this.datosPorfolioFoot.detail(6).subscribe(data => 
    {this.Porfoliofoot=data});
}

}