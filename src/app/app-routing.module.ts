import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './administrador/administrador.component';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';
import { VentanaProyectosComponent } from './ventana-proyectos/ventana-proyectos.component';


const routes: Routes = [{path: 'index', component:IndexComponent},
{path: 'proyectos', component:VentanaProyectosComponent},
{path: 'administrador', component:AdministradorComponent}, 
{path: '', redirectTo: '/index', pathMatch:'full'}, 
{path: '**', component:ErrorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
