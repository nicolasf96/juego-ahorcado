import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './app/components/login/login.component';
import { AppAhorcadoComponent } from './app/components/app-ahorcado/app-ahorcado.component';



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'ahorcado', component: AppAhorcadoComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






