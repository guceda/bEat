import { LoginComponent } from "./login/login.component";
import { Routes, RouterModule, Router } from '@angular/router'
import { AppComponent } from "./app.component";
import { DetalleExperienciaComponent } from "./detalle-experiencia/detalle-experiencia.component";
import { ListaExperienciasComponent } from "./main/experiencias/lista-experiencias/lista-experiencias.component";
import { MainComponent } from "./main/main.component";
import { Login } from './login.guard';
import { NuevaExpComponent } from "./nueva-exp/nueva-exp.component";



export const appRoutes:Routes = [
    { path:'', component: MainComponent },
    { path:'home', component: MainComponent },
    { path:'home/login', component: MainComponent }, 
    { path:'experiencia', component: DetalleExperienciaComponent },
    { path:'experiencia/:id', component: DetalleExperienciaComponent, canActivate: [Login] },
    { path:'nuevaExperiencia', component: NuevaExpComponent, canActivate: [Login] },
    { path: '**', redirectTo:'main', pathMatch: 'full' },
]

