import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Educacion } from 'src/app/modelos/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar-educacion',
  templateUrl: './modificar-educacion.component.html',
  styleUrls: ['./modificar-educacion.component.css']
})
export class ModificarEducacionComponent implements OnInit {
  form2:FormGroup;
   isLogged: boolean = true;
  educacionList: any;

  constructor( private activatedRoute:ActivatedRoute,
    private formBuilder: FormBuilder,private datosEduc: EducacionService,
    private educacionModificada: EducacionService, 
    private tokenService: TokenService) { 

    this.cargarEducaporid();
    
    this.form2 = this.formBuilder.group({
      idEducacion:[''],
      titulo: [''],
      urlimagLogo: [''],
      descripcion: [''],
      urllinkSitio: [''],
      descLinkSitioOrg: [''],
      urlcertificado: [''],
      for_personaid: [6],
    });
    }
    private cargarEducaporid() {
      const id = this.activatedRoute.snapshot.params['idEducacion'];
      this.datosEduc.detail(id).subscribe(data =>
        
         { this.educacionList = data   ;
               console.log('datos de educacion traída de api', data); 
         console.log('lista de educacion traída de api, sola', id); 
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
    this.educacionModificada.save(this.form2.value).subscribe(data=>{
      console.log('del form' , this.form2.value);
      console.log('regisdro educacion modificado a cargar' , data);
    alert("La Educación fue modificada");
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



