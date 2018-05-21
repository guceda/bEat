import { LoginComponent } from "./login/login.component";
import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from "./app.component";
import { DetalleExperienciaComponent } from "./detalle-experiencia/detalle-experiencia.component";
import { ListaExperienciasComponent } from "./main/experiencias/lista-experiencias/lista-experiencias.component";
import { MainComponent } from "./main/main.component";



export const appRoutes:Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full'  },
    { path:'', component: MainComponent },
    { path:'main', component: MainComponent },
    { path:'experiencia', component: DetalleExperienciaComponent },
    { path:'experiencia/:id', component: DetalleExperienciaComponent },
    { path: '**', redirectTo:'main', pathMatch: 'full' },
]

