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
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EducBaseComponent } from './componentes/educ-base/educ-base.component';
import { BotoneditarComponent } from './componentes/botoneditar/botoneditar.component';
import { EditcontenidoComponent } from './componentes/editcontenido/editcontenido.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PadrePorfolioComponent } from './componentes/padre-porfolio/padre-porfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule  } from '@angular/forms';
import { EditEncabezadoComponent } from './componentes/edit/edit-encabezado/edit-encabezado.component';



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
    PadrePorfolioComponent, EditEncabezadoComponent
   
  
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
