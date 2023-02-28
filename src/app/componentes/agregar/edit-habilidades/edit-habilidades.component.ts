import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-edit-habilidades',
  templateUrl: './edit-habilidades.component.html',
  styleUrls: ['./edit-habilidades.component.css']
})
export class EditHabilidadesComponent implements OnInit {
  form:FormGroup;
  constructor(private formBuilder: FormBuilder, private habilidad: HabilidadesService) { 
    this.form=this.formBuilder.group(
      {
    nombreHabilidad:['',],
    nivel:['',],
    for_personaid:[6]
  })
  }

  ngOnInit(): void {
  }
  onCreate(): void{
    this.habilidad.create (this.form.value).subscribe(data=>{
      console.log('del form' , this.form.value);
      console.log('registro habilidad nuevo a cargar' , data);
    alert("La habilidad fue añadida");
    window.location.reload();
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
