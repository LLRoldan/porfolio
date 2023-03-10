import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  form:FormGroup;
  constructor(private formBuilder: FormBuilder,private ruta: Router,
    private experiencia:ExperienciaService){

  this.form=this.formBuilder.group(
  
  {
    cargo : ['',],
    descripcion : ['',],
    periodo : ['',],
    imagenilustra : ['',],
    empresa : ['',],
    linkaempresa :['',],
    for_personaid : [6],
    })
  }
  ngOnInit(): void {
  }

  onCreate(): void{
    this.experiencia.save (this.form.value).subscribe(data=>{
      console.log('del form' , this.form.value);
      console.log('registro experiencia nuevo a cargar' , data);
    alert("La experiencia fue añadida");
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
