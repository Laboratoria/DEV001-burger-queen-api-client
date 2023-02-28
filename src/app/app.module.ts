import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,  ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CookieService } from 'ngx-cookie-service';
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import {NgxPaginationModule} from 'ngx-pagination';


import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CocinaComponent } from './cocina/cocina.component';
import { MenuComponent } from './menu/menu.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SweetAlert2Module.forRoot()
   
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    ProductsComponent,
    PageNotFoundComponent,
    NavbarComponent,
    CocinaComponent,
    MenuComponent,
    CuentaComponent,
    AdminComponent,
   
  ],
  
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
