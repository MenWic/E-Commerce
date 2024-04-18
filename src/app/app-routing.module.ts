import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importacion de Componentes
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

import { AdminViewComponent } from './admin/admin-view/admin-view.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';

import { MostrarSolicitudesUsuariosComponent as VerSolicitudesUsuariosComponent } from './admin/mostrar-usuarios/mostrar-usuarios.component';
import { MostrarSolicitudesProductosComponent as VerSolicitudesProductosComponent } from './admin/mostrar-productos/mostrar-productos.component';
import { MostrarReportesComponent as VerReportesPublicacionesComponent } from './admin/mostrar-reportes/mostrar-reportes.component';
import { NuevoAdminComponent } from './admin/nuevo-admin/nuevo-admin.component';

import { UserViewComponent } from './user/user-view/user-view.component';
import { UserHomeComponent } from './user/user-home/user-home.component';

import { NuevoProductoComponent } from './user/nuevo-producto/nuevo-producto.component';
import { MisProductosComponent } from './user/mis-productos/mis-productos.component';
//import { VerPublicacionesComponent } from './user/ver-publicaciones/ver-publicaciones.component';
import { MisVentasComponent } from './user/mis-ventas/mis-ventas.component';

import { NuevaPublicacionComponent } from './user/nueva-publicacion/nueva-publicacion.component';
import { MisPublicacionesComponent } from './user/mis-publicaciones/mis-publicaciones.component';
import { VerProductosComponent } from './user/ver-productos/ver-productos.component';
import { MisComprasComponent } from './user/mis-compras/mis-compras.component';
import { MisCoinsComponent } from './user/mis-coins/mis-coins.component';
import { UserHomeProductosComponent } from './user/user-home-productos/user-home-productos.component';

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
      { path: 'home', component: AdminHomeComponent }, //Listar a todos los usuarios del sistema
      { path: 'verSolicitudesUsuarios', component: VerSolicitudesUsuariosComponent }, //Listar solicitudes de nuevos "Users"
      { path: 'verSolicitudesProductos', component: VerSolicitudesProductosComponent },
       //YA ESTAAAA
      { path: 'verReportesPublicaciones', component: VerReportesPublicacionesComponent }, //***
      { path: 'nuevoAdmin', component: NuevoAdminComponent } //Form de creacion de nuevo "Admin"
    ],
  },

  /* PEND "userMenu" */
  {
    path: 'userMenu',
    component: UserViewComponent,
    children: [
      { path: 'home', component: UserHomeComponent }, //Mostrar "Qué pr. quieres comprar?" (Seleccionar un Tag y segun esto mostrar publicaciones
      { path: 'homeProductos', component: UserHomeProductosComponent }, //Mostrar "Qué pr. quieres comprar?" (Seleccionar un Tag y segun esto mostrar publicaciones
      //{ path: 'homeVoluntariados', component: UserHomeProductosComponent }, //Mostrar "Qué pr. quieres comprar?" (Seleccionar un Tag y segun esto mostrar publicaciones
      { path: 'nuevoProducto', component: NuevoProductoComponent },
      { path: 'misProductos', component: MisProductosComponent },
      { path: 'misVentas', component: MisVentasComponent },

      { path: 'nuevaPublicacion', component: NuevaPublicacionComponent },
      { path: 'misPublicaciones', component: MisPublicacionesComponent },
      { path: 'verProductos', component: VerProductosComponent },
      { path: 'misCompras', component: MisComprasComponent },

      { path: 'misCoins', component: MisCoinsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
