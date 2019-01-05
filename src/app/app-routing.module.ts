import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OffreEmploitComponent } from './offre-emploit/offre-emploit.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AcRecruteurComponent } from './ac-recruteur/ac-recruteur.component';
import { AcCondidatsComponent } from './ac-condidats/ac-condidats.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { LoginComponent } from './login/login.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { PublierComponent } from './publier/publier.component';
import { ProfilsComponent } from './profils/profils.component';



// Configuration des URLs
const routes: Routes = [
  { path: 'offre' , component: OffreEmploitComponent},
  { path: 'acceuil' , component: AcceuilComponent},
  { path: 'ac-recruteur' , component: AcRecruteurComponent},
  { path: 'ac-condidats' , component: AcCondidatsComponent},
  { path: 'sing-up' , component: SingUpComponent},
  { path: 'login' , component: LoginComponent},
  { path: 'annonce' , component: AnnoncesComponent},
  { path: 'publier' , component: PublierComponent},
  { path: 'profils' , component: ProfilsComponent },
  
  { path: '' , redirectTo: 'acceuil' , pathMatch: 'full' },
  { path: '**' , redirectTo: 'acceuil' }
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
