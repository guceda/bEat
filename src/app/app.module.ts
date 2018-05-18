import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { EquipoComponent } from './equipo/equipo.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { IntroComponent } from './intro/intro.component';
import { ListaExperienciasComponent } from './lista-experiencias/lista-experiencias.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { DetalleExperienciaComponent } from './detalle-experiencia/detalle-experiencia.component';


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
    DetalleExperienciaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
