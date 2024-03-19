import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importacion de Componentes
import { LoginComponent } from './auth/login/login.component';

import { AdminViewComponent } from './admin/admin-view/admin-view.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { MostrarUsuariosComponent } from './admin/mostrar-usuarios/mostrar-usuarios.component';
import { MostrarPublicacionesComponent } from './admin/mostrar-publicaciones/mostrar-publicaciones.component';
import { MostrarReportesComponent } from './admin/mostrar-reportes/mostrar-reportes.component';
import { NuevoAdminComponent } from './admin/nuevo-admin/nuevo-admin.component';

//Declaracion de Componentes como Rutas
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '*',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'adminMenu',
    component: AdminViewComponent,
    children: [
      { path: 'home', component: AdminHomeComponent }, //Archivos y Carpetas en raiz
      { path: 'mostrarUsuarios', component: MostrarUsuariosComponent }, //Form de creacion
      { path: 'mostrarPublicaciones', component: MostrarPublicacionesComponent },
      { path: 'mostrarReportes', component: MostrarReportesComponent },
      { path: 'nuevoAdmin', component: NuevoAdminComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
