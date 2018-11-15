import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { AcRecruteurComponent } from './ac-recruteur/ac-recruteur.component';
import { AcCondidatsComponent } from './ac-condidats/ac-condidats.component';
import { OffreEmploitComponent } from './offre-emploit/offre-emploit.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import {AuthService} from './Services/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AcceuilComponent,
    SingUpComponent,
    AcRecruteurComponent,
    AcCondidatsComponent,
    OffreEmploitComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
