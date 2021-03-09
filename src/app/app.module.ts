import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { FormGenerarUsuarioComponent } from './form-generar-usuario/form-generar-usuario.component';
import { ListaUsuarosComponent } from './lista-usuaros/lista-usuaros.component';
import { MyphotoComponent } from './myphoto/myphoto.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FooterComponent,
    FormGenerarUsuarioComponent,
    ListaUsuarosComponent,
    MyphotoComponent,
    ContactoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
