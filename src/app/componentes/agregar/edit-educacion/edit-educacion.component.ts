import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})


export class EditEducacionComponent implements OnInit {
  form:FormGroup;
 
  constructor(private formBuilder: FormBuilder,private ruta: Router, private educacion: EducacionService) { 
      this.form=this.formBuilder.group(
       {
      titulo:['',],
      urlimagLogo:['',],
      descripcion:['',],
      urllinkSitio:['',],
      descLinkSitioOrg:['',],
      urlcertificado:['',],
      for_personaid:[6]
   })
  }

  ngOnInit(): void {
   
  }

 
  onCreate(): void{
    this.educacion.save(this.form.value).subscribe(data=>{
      console.log('del form' , this.form.value);
      console.log('regisdro educacion nuevo a cargar' , data);
    alert("La Educación fue añadida");
    this.ruta.navigate (['/porfolio']);
  });
}

onEnviar(event:Event){
  event.preventDefault;
  if (this.form.valid){
    this.onCreate();
  }else{
    alert("falló en la carga del formulario, intente nuevamente");
    this.form.markAllAsTouched();
  }
}



}
