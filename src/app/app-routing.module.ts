import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { ListaassociazioniComponent } from './listaassociazioni/listaassociazioni.component';
import { ListainiziativeComponent } from './listainiziative/listainiziative.component';

const routes: Routes = [
  { path: '', pathMatch:"full", component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'info', component: InfoComponent },
  { path: 'iniziative', component: ListainiziativeComponent },
  { path: 'associazioni', component: ListaassociazioniComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
