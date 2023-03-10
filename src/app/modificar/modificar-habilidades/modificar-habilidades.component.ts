import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-modificar-habilidades',
  templateUrl: './modificar-habilidades.component.html',
  styleUrls: ['./modificar-habilidades.component.css']
})
export class ModificarHabilidadesComponent implements OnInit {
  form:FormGroup;
  isLogged: boolean = true;
 habilidadList: any;

 constructor( private activatedRoute:ActivatedRoute,
   private formBuilder: FormBuilder,private datosHabil: HabilidadesService ,private ruta: Router,
   private habilidadModificada: HabilidadesService, 
   private tokenService: TokenService) { 

  this.cargarHabilporid();
    
  this.form = this.formBuilder.group({
    idHabilidad:[''],
    nombreHabilidad: [''],
    nivel: [''],
    for_personaid: [6],
  });
  }
  private cargarHabilporid() {
    const id = this.activatedRoute.snapshot.params['idHabilidad'];
    this.datosHabil.detail(id).subscribe(data =>
      
       { this.habilidadList = data   ;
             console.log('datos de habilidad traída de api', data); 
       console.log('lista de habilidad traída de api, sola', id); 
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


onGuardarMod(): void{
  this.habilidadModificada.create (this.form.value).subscribe(data=>{
    console.log('del form' , this.form.value);
    console.log('regisdro educacion modificado a cargar' , data);
  alert("La Educación fue modificada");
  this.ruta.navigate (['/porfolio']);
});
}

onEnviar(event:Event){
event.preventDefault;
if (this.form.valid){
  this.onGuardarMod();
}else{
  alert("falló en la carga del formulario, intente nuevamente");
  this.form.markAllAsTouched();
}

}
}

