import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PadrePorfolioComponent } from './componentes/padre-porfolio/padre-porfolio.component';
import { EditEncabezadoComponent } from './componentes/agregar/edit-encabezado/edit-encabezado.component';
import { EditEducacionComponent } from './componentes/agregar/edit-educacion/edit-educacion.component';
import { EditExperienciaComponent } from './componentes/agregar/edit-experiencia/edit-experiencia.component';
import { EditHabilidadesComponent } from './componentes/agregar/edit-habilidades/edit-habilidades.component';
import { EditTrabajosComponent } from './componentes/agregar/edit-trabajos/edit-trabajos.component';
import { ModificarEducacionComponent } from './modificar/modificar-educacion/modificar-educacion.component';

import { GuardGuard } from './servicios/guard.guard';
import { ModificarEncabezadoComponent } from './modificar/modificar-encabezado/modificar-encabezado.component';
import { ModificarExperienciaComponent } from './modificar/modificar-experiencia/modificar-experiencia.component';
import { ModificarHabilidadesComponent } from './modificar/modificar-habilidades/modificar-habilidades.component';
import { ModificarTrabajoComponent } from './modificar/modificar-trabajo/modificar-trabajo.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { EducBaseComponent } from './componentes/educ-base/educ-base.component';

const routes: Routes = [
  {path: 'porfolio', component:PadrePorfolioComponent,/* canActivate: [GuardGuard]*/},
  {path: 'login', component:IniciarSesionComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'educacion', component:EducBaseComponent },
  {path: 'edit-encabezado', component:EditEncabezadoComponent},
  {path: 'modificar-encabezado/:id', component:ModificarEncabezadoComponent},
  {path: 'edit-educacion', component:EditEducacionComponent, /*canActivate: [GuardGuard], data: { expectedRol: ['admin', 'user'] }*/},
  {path: 'modificar-educacion/:idEducacion', component:ModificarEducacionComponent},
{path: 'edit-experiencia', component:EditExperienciaComponent, /*canActivate: [GuardGuard]*/},
  {path: 'modificar-experiencia/:idExperiencia', component:ModificarExperienciaComponent},
  {path: 'edit-habilidades', component:EditHabilidadesComponent},
  {path: 'modificar-habilidades/:idHabilidad', component:ModificarHabilidadesComponent },
  {path: 'edit-trabajos', component:EditTrabajosComponent },
  {path: 'modificar-trabajos/:idTrabajo', component:ModificarTrabajoComponent},
  
  {path:'',redirectTo:'porfolio',pathMatch:'full'},
  {path: 'home',component:PadrePorfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
