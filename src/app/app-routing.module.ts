import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MyphotoComponent} from './myphoto/myphoto.component';
import { ContactoComponent} from './contacto/contacto.component';
import { FormGenerarUsuarioComponent} from './form-generar-usuario/form-generar-usuario.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'myphoto', component: MyphotoComponent },
  {path: 'contacto', component: ContactoComponent },
  {path: 'form-generar-usuario', component: FormGenerarUsuarioComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
