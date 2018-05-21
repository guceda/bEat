import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ExperienciasComponent } from './main/experiencias/experiencias.component';
import { EquipoComponent } from './main/equipo/equipo.component';
import { ComentariosComponent } from './main/comentarios/comentarios.component';
import { IntroComponent } from './main/intro/intro.component';
import { ListaExperienciasComponent } from './main/experiencias/lista-experiencias/lista-experiencias.component';
import { ExperienciaComponent } from './main/experiencias/lista-experiencias/experiencia/experiencia.component';
import { DetalleExperienciaComponent } from './detalle-experiencia/detalle-experiencia.component';
import { HttpModule } from '@angular/http';
import { ListaEquipoComponent } from './main/equipo/lista-equipo/lista-equipo.component';
import { MiembroEquipoComponent } from './main/equipo/lista-equipo/miembro-equipo/miembro-equipo.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { QuienesSomosComponent } from './main/quienes-somos/quienes-somos.component';
import { MainComponent } from './main/main.component';
import { CabeceraComponent } from './detalle-experiencia/cabecera/cabecera.component';
import { DescripcionExperienciaComponent } from './detalle-experiencia/descripcion-experiencia/descripcion-experiencia.component';
import { ChefComponent } from './detalle-experiencia/chef/chef.component';
import { MapaComponent } from './mapa/mapa.component';
import { OtrasExperienciasComponent } from './otras-experiencias/otras-experiencias.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ExperienciasComponent,
    EquipoComponent,
    ComentariosComponent,
    IntroComponent,
    ListaExperienciasComponent,
    ExperienciaComponent,
    DetalleExperienciaComponent,
    ListaEquipoComponent,
    MiembroEquipoComponent,
    LoginComponent,
    QuienesSomosComponent,
    MainComponent,
    CabeceraComponent,
    DescripcionExperienciaComponent,
    ChefComponent,
    MapaComponent,
    OtrasExperienciasComponent
  ],
  imports: [
    BrowserModule, HttpModule, RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
