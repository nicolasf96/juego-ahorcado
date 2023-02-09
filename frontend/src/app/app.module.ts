import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AhorcadoDisplayComponent } from './components/ahorcado-display/ahorcado-display.component';
import { AhorcadoKeyboardComponent } from './components/ahorcado-keyboard/ahorcado-keyboard.component';
import { AhorcadoLetrasComponent } from './components/ahorcado-letras/ahorcado-letras.component';
import { AppAhorcadoComponent } from './components/app-ahorcado/app-ahorcado.component';
import { AhorcadoDisplayWinComponent } from './components/ahorcado-display-win/ahorcado-display-win.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AhorcadoDisplayComponent,
    AhorcadoKeyboardComponent,
    AhorcadoLetrasComponent,
    AppAhorcadoComponent,
    AhorcadoDisplayWinComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
