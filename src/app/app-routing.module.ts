import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PadrePorfolioComponent } from './componentes/padre-porfolio/padre-porfolio.component';
import { EditEncabezadoComponent } from './componentes/edit/edit-encabezado/edit-encabezado.component';

const routes: Routes = [
  {path: 'porfolio', component:PadrePorfolioComponent},
  {path: 'iniciar-sesion', component:IniciarSesionComponent},
  {path: 'edit-encabezado', component:EditEncabezadoComponent},
  {path:'',redirectTo:'porfolio',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
