import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';
import { TrabajosService } from 'src/app/servicios/trabajos.service';

@Component({
  selector: 'app-modificar-trabajo',
  templateUrl: './modificar-trabajo.component.html',
  styleUrls: ['./modificar-trabajo.component.css']
})
export class ModificarTrabajoComponent implements OnInit {

  isLogged: boolean = true;
 trabajosList: any;

  form:FormGroup;
  constructor(private activatedRoute:ActivatedRoute,
    private formBuilder: FormBuilder, private datosTrab: TrabajosService,
    private trabajoModificada: TrabajosService,
    private tokenService: TokenService) { 
    this.cargarTrabajoporid();

    this.form=this.formBuilder.group(
      {
    idTrabajos:['',],
    tituloproyecto:['',],
    descripcion:['',],
    linkcaptura:['',],
    linkaproyecto:['',],
    for_personaid:[6]
  })
  }

 
private cargarTrabajoporid() {
  const id = this.activatedRoute.snapshot.params['idTrabajo'];
  this.datosTrab.detail(id).subscribe(data =>
    { this.trabajosList = data   ;
           console.log('datos de trabajo traída de api', data); 
     console.log('lista de trabajos traída de api, sola', id); 
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
this.trabajoModificada.guardar(this.form.value).subscribe(data=>{
  console.log('del form' , this.form.value);
  console.log('regisdro trabajo modificado a cargar' , data);
alert("El trabajo fué modificad");
window.location.reload();
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
