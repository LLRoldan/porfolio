import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PadrePorfolioComponent } from './componentes/padre-porfolio/padre-porfolio.component';
import { EditEncabezadoComponent } from './componentes/edit/edit-encabezado/edit-encabezado.component';
import { EditEducacionComponent } from './componentes/edit/edit-educacion/edit-educacion.component';
import { EditExperienciaComponent } from './componentes/edit/edit-experiencia/edit-experiencia.component';
import { EditHabilidadesComponent } from './componentes/edit/edit-habilidades/edit-habilidades.component';
import { EditTrabajosComponent } from './componentes/edit/edit-trabajos/edit-trabajos.component';

import { GuardGuard } from './servicios/guard.guard';

const routes: Routes = [
  {path: 'porfolio', component:PadrePorfolioComponent,/* canActivate: [GuardGuard]*/},
  {path: 'iniciar-sesion', component:IniciarSesionComponent},
  {path: 'edit-encabezado', component:EditEncabezadoComponent},
  {path: 'edit-educacion', component:EditEducacionComponent},
  {path: 'edit-experiencia', component:EditExperienciaComponent},
  {path: 'edit-habilidades', component:EditHabilidadesComponent},
  {path: 'edit-trabajos', component:EditTrabajosComponent },
  
   {path:'',redirectTo:'porfolio',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
