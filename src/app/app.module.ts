import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { BootstrapModalModule } from 'ng2-bootstrap-modal'



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MapaGeoComponent } from './main/mapa-geo/mapa-geo.component';
import { FooterComponent } from './footer/footer.component';
import { ExperienciasComponent } from './main/experiencias/experiencias.component';
import { EquipoComponent } from './main/equipo/equipo.component';
import { RegistroComponent } from './registro/registro.component'
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
import { MapaComponent } from './detalle-experiencia/mapa/mapa.component';
import { OtrasExperienciasComponent } from './detalle-experiencia/otras-experiencias/otras-experiencias.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Login } from './login.guard';




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
    MapaGeoComponent,
    OtrasExperienciasComponent,
    RegistroComponent
  
  ],
  imports: [
    BrowserModule, HttpModule, RouterModule.forRoot(appRoutes), AgmCoreModule.forRoot({ apiKey: 'AIzaSyCJljbW6TMtwO4Q75_thCUTCl4bNAvBl5Y'}), BootstrapModalModule.forRoot({container:document.body}),FormsModule, ReactiveFormsModule

  ],
  entryComponents:[
    LoginComponent,
    RegistroComponent
  ],
  providers: [Login],
  bootstrap: [AppComponent]
})
export class AppModule { }
