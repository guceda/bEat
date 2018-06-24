import { LoginComponent } from "./login/login.component";
import { Routes, RouterModule, Router } from '@angular/router'
import { AppComponent } from "./app.component";
import { DetalleExperienciaComponent } from "./detalle-experiencia/detalle-experiencia.component";
import { ListaExperienciasComponent } from "./main/experiencias/lista-experiencias/lista-experiencias.component";
import { MainComponent } from "./main/main.component";
import { Login } from './login.guard';
import { NuevaExpComponent } from "./nueva-exp/nueva-exp.component";
import { MyExpsComponent } from "./my-exps/my-exps.component";
import { FavoritasComponent } from "./favoritas/favoritas.component";
import { ChatComponent } from "./chat/chat.component";
import { MensajesComponent } from "./mensajes/mensajes.component";



export const appRoutes:Routes = [
    { path:'', component: MainComponent },
    { path:'home', component: MainComponent },
    { path:'home/login', component: MainComponent }, 
    { path:'experiencia', component: DetalleExperienciaComponent },
    { path:'experiencia/:id', component: DetalleExperienciaComponent, canActivate: [Login] },
    { path:'nuevaExperiencia', component: NuevaExpComponent, canActivate: [Login] },
    { path:'misExperiencias', component:MyExpsComponent, canActivate: [Login]},
    { path:'favoritas', component: FavoritasComponent, canActivate: [Login] },
    { path:'chat', component: ChatComponent, canActivate: [Login] },
    { path:'mensajes', component: MensajesComponent, canActivate: [Login] },

    { path: '**', redirectTo:'main', pathMatch: 'full' },
]

