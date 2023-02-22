import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-modificar-experiencia',
  templateUrl: './modificar-experiencia.component.html',
  styleUrls: ['./modificar-experiencia.component.css']
})
export class ModificarExperienciaComponent implements OnInit {

  form2:FormGroup;
  isLogged: boolean = true;
 expeList: any;

 constructor( private activatedRoute:ActivatedRoute,
   private formBuilder: FormBuilder,private datosExper: ExperienciaService,
   private experienciaModificada: ExperienciaService, 
   private tokenService: TokenService) { 

   this.cargarExpeporid();
   
   this.form2 = this.formBuilder.group({
    
     idExperiencia: [''],
     lugardetrabajo : [''],
     descripcion : [''],
     periodo : [''],
     cargo : [''],
     imagenilustra : [''],
     linkaempresa : [''],
     empresa : [''],
     for_personaid : [6],

   });
   }
   private cargarExpeporid() {
     const id = this.activatedRoute.snapshot.params['idExperiencia'];
     this.datosExper.detail(id).subscribe(data =>
       
        { this.expeList = data   ;
              console.log('datos de experiencia traída de api', data); 
        console.log('lista de experiencia traída de api, sola', id); 
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
   this.experienciaModificada.save(this.form2.value).subscribe(data=>{
     console.log('del form' , this.form2.value);
     console.log('regisdro experiencia modificado a cargar' , data);
   alert("La experiencia fue modificada");
   window.location.reload();
 });
}

onEnviar(event:Event){
 event.preventDefault;
 if (this.form2.valid){
   this.onGuardarMod();
 }else{
   alert("falló en la carga del formulario, intente nuevamente");
   this.form2.markAllAsTouched();
 }

}

}


