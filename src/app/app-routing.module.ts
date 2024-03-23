import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importacion de Componentes
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

import { AdminViewComponent } from './admin/admin-view/admin-view.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { MostrarUsuariosComponent } from './admin/mostrar-usuarios/mostrar-usuarios.component';
import { MostrarPublicacionesComponent } from './admin/mostrar-publicaciones/mostrar-publicaciones.component';
import { MostrarReportesComponent } from './admin/mostrar-reportes/mostrar-reportes.component';
import { NuevoAdminComponent } from './admin/nuevo-admin/nuevo-admin.component';

import { UserViewComponent } from './user/user-view/user-view.component';
import { UserHomeComponent } from './user/user-home/user-home.component';

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
  path: 'signup',
    component: SignupComponent
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

  /* PEND "userMenu" */
  {
    path: 'userMenu',
    component: UserViewComponent,
    children: [
      { path: 'home', component: UserHomeComponent }, //Archivos y Carpetas en raiz
      //{ path: 'crearPublicacion', component: CrearPublicacionComponent } //Form de creacion
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
