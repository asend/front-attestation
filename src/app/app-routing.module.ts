import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {MonCompteComponent} from "./pages/mon-compte/mon-compte.component";
import {TestComponent} from "./pages/test/test.component";
import { AccueilComponent } from './pages/accueil/accueil.component';
import {VerifEmailComponent} from "./pages/verif-email/verif-email.component";
import { DataListComponent } from './pages/stat/data-list/data-list.component';

const routes: Routes = [
  {path: 'connexion', component:LoginComponent},
  {path: 'verifEmail', component:VerifEmailComponent},
  {path: 'inscription', component:RegisterComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'mon-compte', component:MonCompteComponent},
  {path: 'accueil', component:AccueilComponent},
  {path: 'test', component:TestComponent},
  {path: 'dash', component:DataListComponent},
  { path: '', redirectTo: 'connexion', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
