import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { PersonaService } from './services/persona.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './Modals/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { MiInformacionComponent } from './banner/mi-informacion/mi-informacion.component';
import { TitulosComponent } from './banner/titulos/titulos.component';
import { ExperienciaComponent } from './banner/experiencia/experiencia.component';
import { EducacionComponent } from './banner/educacion/educacion.component';
import { ProyectosComponent } from './banner/proyectos/proyectos.component';
import { HabilidadesComponent } from './banner/habilidades/habilidades.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';
import { LogOutComponent } from './Modals/log-out/log-out.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { MiInformacionAdminComponent } from './banner-admin/mi-informacion-admin/mi-informacion-admin.component';
import { TitulosAdminComponent } from './banner-admin/titulos-admin/titulos-admin.component';
import { ExperienciaAdminComponent } from './banner-admin/experiencia-admin/experiencia-admin.component';
import { EducacionAdminComponent } from './banner-admin/educacion-admin/educacion-admin.component';
import { ProyectosAdminComponent } from './banner-admin/proyectos-admin/proyectos-admin.component';
import { HabilidadesAdminComponent } from './banner-admin/habilidades-admin/habilidades-admin.component';
import { VentanaProyectosComponent } from './ventana-proyectos/ventana-proyectos.component';
import { IntroduccionComponent } from './mostrar-proyectos/introduccion/introduccion.component';
import { CuerpoProyectosComponent } from './mostrar-proyectos/cuerpo-proyectos/cuerpo-proyectos.component';
import { BotonInicioComponent } from './boton-inicio/boton-inicio.component';
import { EditarFotoComponent } from './Modals/editar-foto/editar-foto.component';
import { EditarSobreMiComponent } from './Modals/editar-sobre-mi/editar-sobre-mi.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    MiInformacionComponent,
    TitulosComponent,
    ExperienciaComponent,
    EducacionComponent,
    ProyectosComponent,
    HabilidadesComponent,
    AdministradorComponent,
    ErrorComponent,
    IndexComponent,
    LogOutComponent,
    NavbarAdminComponent,
    MiInformacionAdminComponent,
    TitulosAdminComponent,
    ExperienciaAdminComponent,
    EducacionAdminComponent,
    ProyectosAdminComponent,
    HabilidadesAdminComponent,
    VentanaProyectosComponent,
    IntroduccionComponent,
    CuerpoProyectosComponent,
    BotonInicioComponent,
    EditarFotoComponent,
    EditarSobreMiComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
