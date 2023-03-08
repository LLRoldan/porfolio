import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { TrabajosComponent } from './componentes/trabajos/trabajos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CopyComponent } from './componentes/copy/copy.component';
import { HttpClientModule} from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EducBaseComponent } from './componentes/educ-base/educ-base.component';
import { BotoneditarComponent } from './componentes/botoneditar/botoneditar.component';
import { EditcontenidoComponent } from './componentes/editcontenido/editcontenido.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PadrePorfolioComponent } from './componentes/padre-porfolio/padre-porfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule  } from '@angular/forms';
import { EditEncabezadoComponent } from './componentes/agregar/edit-encabezado/edit-encabezado.component';
import { EditEducacionComponent } from './componentes/agregar/edit-educacion/edit-educacion.component';
import { EditExperienciaComponent } from './componentes/agregar/edit-experiencia/edit-experiencia.component';
import { EditHabilidadesComponent } from './componentes/agregar/edit-habilidades/edit-habilidades.component';
import { EditTrabajosComponent } from './componentes/agregar/edit-trabajos/edit-trabajos.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { PorfolioService } from './servicios/porfolio.service';
import { InterceptorService } from './servicios/interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModificarEducacionComponent } from './modificar/modificar-educacion/modificar-educacion.component';
import { ModificarEncabezadoComponent } from './modificar/modificar-encabezado/modificar-encabezado.component';
import { ModificarExperienciaComponent } from './modificar/modificar-experiencia/modificar-experiencia.component';
import { ModificarHabilidadesComponent } from './modificar/modificar-habilidades/modificar-habilidades.component';
import { ModificarTrabajoComponent } from './modificar/modificar-trabajo/modificar-trabajo.component';
;



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EncabezadoComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    TrabajosComponent,
    FooterComponent,
    CopyComponent,
    EducBaseComponent,
    BotoneditarComponent,
    EditcontenidoComponent,
    IniciarSesionComponent, 
    PadrePorfolioComponent, EditEncabezadoComponent, EditEducacionComponent, EditExperienciaComponent, 
    EditHabilidadesComponent, EditTrabajosComponent, RegistroComponent, ModificarEducacionComponent, ModificarEncabezadoComponent, 
    ModificarExperienciaComponent, ModificarHabilidadesComponent, ModificarTrabajoComponent
   
  
     ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [ NavbarComponent,
   
  ],
  providers: [PorfolioService,{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],////linea agregada para Guards  VER!
  bootstrap: [AppComponent]
})
export class AppModule { }
