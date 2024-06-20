import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthusersComponent } from './authusers/authusers.component';
import { InmueblesventasComponent } from './inmueblesventas/inmueblesventas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthusersComponent,
    InmueblesventasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
