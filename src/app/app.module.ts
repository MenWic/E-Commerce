import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { APP_BASE_HREF } from '@angular/common'; //Para redirigir a servidor Xampp 

import { LoginComponent } from './auth/login/login.component';
import { AdminViewComponent } from './admin/admin-view/admin-view.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { MostrarUsuariosComponent } from './admin/mostrar-usuarios/mostrar-usuarios.component';
import { MostrarPublicacionesComponent } from './admin/mostrar-publicaciones/mostrar-publicaciones.component';
import { MostrarReportesComponent } from './admin/mostrar-reportes/mostrar-reportes.component';
import { NuevoAdminComponent } from './admin/nuevo-admin/nuevo-admin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserViewComponent } from './user/user-view/user-view.component';
import { UserNavbarComponent } from './user/user-navbar/user-navbar.component';
import { UserHomeComponent } from './user/user-home/user-home.component';

// User components (pend)

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,

    AdminViewComponent,
    AdminHomeComponent,
    AdminNavbarComponent,
    MostrarUsuariosComponent,
    MostrarPublicacionesComponent,
    MostrarReportesComponent,
    NuevoAdminComponent,

    UserViewComponent,
    UserNavbarComponent,
    UserHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [CookieService,
    {provide: APP_BASE_HREF, useValue: './'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
