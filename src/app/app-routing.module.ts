import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//importé les différents module
import { ConnexionComponent } from './connexion/connexion.component';
import { MedecinsComponent } from './medecins/medecins.component';
import { VisitesComponent } from './visites/visites.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { DataService } from './app.service.data';
import { DeclarationListEmitMode } from '@angular/compiler';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { ServiceComponent } from './service/service.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//les routes de chaque page
const routes: Routes = [
  { path:'',component: ConnexionComponent},
  { path:'medecins', component: MedecinsComponent },
  { path:'visites', component: VisitesComponent },
  { path:'accueil', component: NavbarComponent },
  //{ path:'service', component: ServiceComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule,BrowserModule,FormsModule],
  exports: [RouterModule],
  providers: [DataService]
})
export class AppRoutingModule { }
