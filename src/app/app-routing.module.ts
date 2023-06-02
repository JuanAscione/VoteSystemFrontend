import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {ListaVotosComponent} from "./lista-votos/lista-votos.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'votos', component: ListaVotosComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect to the home component for any other route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
