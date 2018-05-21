import { LoginComponent } from "./login/login.component";
import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from "./app.component";
import { DetalleExperienciaComponent } from "./detalle-experiencia/detalle-experiencia.component";
import { ListaExperienciasComponent } from "./lista-experiencias/lista-experiencias.component";



export const appRoutes:Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'  },
    { path:'home', component: AppComponent },
    { path:'login', component: LoginComponent },
    { path:'detalle', component: DetalleExperienciaComponent },
    { path: 'experiencias', component: ListaExperienciasComponent },
    { path:'detalle', component: DetalleExperienciaComponent },

]

