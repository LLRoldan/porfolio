import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TrabajosService } from 'src/app/servicios/trabajos.service';

@Component({
  selector: 'app-edit-trabajos',
  templateUrl: './edit-trabajos.component.html',
  styleUrls: ['./edit-trabajos.component.css']
})
export class EditTrabajosComponent implements OnInit {
  form:FormGroup;
  constructor(private formBuilder: FormBuilder,private ruta: Router, private trabajo: TrabajosService) { 
    this.form=this.formBuilder.group(
      {
    tituloproyecto:['',],
    descripcion:['',],
    linkcaptura:['',],
    linkaproyecto:['',],
    for_personaid:[6]
  })
  }

  ngOnInit(): void {
  }
  onCreate(): void{
    this.trabajo.guardar (this.form.value).subscribe(data=>{
      console.log('del form' , this.form.value);
      console.log('registro trabajo nuevo a cargar' , data);
    alert("El nuevo trabajo fue añadido");
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
