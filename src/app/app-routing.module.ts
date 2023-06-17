import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {ListaVotosComponent} from "./lista-votos/lista-votos.component";
import {LoginComponent} from "./login/login.component";
import {VotingComponent} from "./voting/voting.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'votes', component: ListaVotosComponent },
  { path: 'voting', component: VotingComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' } // Redirect to the home component for any other route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
