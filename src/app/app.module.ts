import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'; //Para enviar peticiones a Node.js
import { APP_BASE_HREF } from '@angular/common'; //Para redirigir a servidor Xampp
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from "@angular/material/menu"; //Angular Material
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';

import { CookieService } from 'ngx-cookie-service'; //Cookie de usuarios

// Autenticacion
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

// Admin components
import { AdminViewComponent } from './admin/admin-view/admin-view.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { MostrarSolicitudesUsuariosComponent } from './admin/mostrar-usuarios/mostrar-usuarios.component';
import { MostrarSolicitudesProductosComponent } from './admin/mostrar-productos/mostrar-productos.component';

import { MostrarReportesComponent } from './admin/mostrar-reportes/mostrar-reportes.component';
import { NuevoAdminComponent } from './admin/nuevo-admin/nuevo-admin.component';

// User components
import { UserViewComponent } from './user/user-view/user-view.component';
import { UserNavbarComponent } from './user/user-navbar/user-navbar.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NuevoProductoComponent } from './user/nuevo-producto/nuevo-producto.component';
import { MisProductosComponent } from './user/mis-productos/mis-productos.component';
import { VerPublicacionesComponent } from './user/ver-publicaciones/ver-publicaciones.component';
import { MisVentasComponent } from './user/mis-ventas/mis-ventas.component';
import { NuevaPublicacionComponent } from './user/nueva-publicacion/nueva-publicacion.component';
import { MisPublicacionesComponent } from './user/mis-publicaciones/mis-publicaciones.component';
import { VerProductosComponent } from './user/ver-productos/ver-productos.component';
import { MisComprasComponent } from './user/mis-compras/mis-compras.component';
import { MisCoinsComponent } from './user/mis-coins/mis-coins.component';
import { CardProductoComponent } from './utilities/card-producto/card-producto.component';
import { CardPublicacionComponent } from './utilities/card-publicacion/card-publicacion.component';
import { CardProductoMuroComponent } from './utilities/card-producto-muro/card-producto-muro.component';
import { CardProductoReportadoComponent } from './utilities/card-producto-reportado/card-producto-reportado.component';
import { UserHomeProductosComponent } from './user/user-home-productos/user-home-productos.component';
//import { MostrarProductosComponent } from './admin/mostrar-productos/mostrar-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,

    AdminViewComponent,
    AdminHomeComponent,
    AdminNavbarComponent,
    MostrarSolicitudesUsuariosComponent,
    MostrarSolicitudesProductosComponent, //this
    MostrarReportesComponent,
    NuevoAdminComponent,

    UserViewComponent,
    UserNavbarComponent,
    UserHomeComponent,
    NuevoProductoComponent,
    MisProductosComponent,
    VerPublicacionesComponent,
    MisVentasComponent,
    NuevaPublicacionComponent,
    MisPublicacionesComponent,
    VerProductosComponent,
    MisComprasComponent,
    MisCoinsComponent,
    CardProductoComponent,
    CardPublicacionComponent,
    CardProductoMuroComponent,
    CardProductoReportadoComponent,
    UserHomeProductosComponent,
    
    //MostrarProductosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
  providers: [CookieService,
    {provide: APP_BASE_HREF, useValue: './'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
