import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/modelos/persona';
import { PersonaService } from 'src/app/servicios/persona.service';



@Component({
  selector: 'app-edit-encabezado',
  templateUrl: './edit-encabezado.component.html',
  styleUrls: ['./edit-encabezado.component.css']
})
export class EditEncabezadoComponent implements OnInit {

  form: FormGroup;
  //perso:persona;

  constructor(private formBuilder: FormBuilder,
    private sPersona: PersonaService,
    private activatedRoute: ActivatedRoute,
    private ruta: Router,
  ) {
    //Creamos el grupo de controles para el formulario 
    this.form = this.formBuilder.group({
      id: [''],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      domicilio: ['', [Validators.required]],
      ubicacion: ['', [Validators.required]],       
      telefono: ['', [Validators.required]],
      email: ['', ],
      urlfacebook: ['', ],
      urlinstagram: ['', ],
      urllinkedin: ['', ],
      urlbaner: ['', ],
      urlabatar: ['', ],
      expertoEnprimero: ['', [Validators.required]],
      expertoEnsegundo: ['', [Validators.required]],
      expertoEntercero: ['', [Validators.required]],
      
   })
  }

  ngOnInit(): void {

    /*
    const id = this.activatedRoute.snapshot.params['id'];
    this.sPersona.detail(id).subscribe(data => {
      this.perso=data;
    },err =>{
      alert("Error al cargar datos");
      this.router.navigate(['']);
    }
    )*/
  }

  get Nombre() {
    return this.form.get("nombre");
  }

  get Apellido() {
    return this.form.get("apellido");
  }

  get Titulo() {
    return this.form.get("titulo");
  }

  get Domicilio() {
    return this.form.get("domicilio");
  }

  get Ubicacion() {
    return this.form.get("ubicacion");
  }

  get Email() {
    return this.form.get("email");
  }

  get Telefono() {
    return this.form.get("telefono");
  }

  get Urlbaner() {
    return this.form.get("urlbaner");
  }

  get Urlabatar() {
    return this.form.get("urlabatar");
  }

  get Urlinstagram() {
    return this.form.get("urlinstagram");
  }

  get Urlfacebook() {
    return this.form.get("urlfacebook");
  }

  get Urllinkedin() {
    return this.form.get("urllinkedin");
  }

  get Act1() {
    return this.form.get("expertoEnprimero");
  }

  get Act2() {
    return this.form.get("expertoEnsegundo");
  }

  get Act3() {
    return this.form.get("expertoEntercero");
  }


  onCreate(): void {
    this.sPersona.save(this.form.value).subscribe(data => {
      alert("Persona Añadida");
      this.ruta.navigate (['/porfolio']);
    });
  }

  onEnviar(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      //metodos
      this.onCreate();
    } else {
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }

  }
}
