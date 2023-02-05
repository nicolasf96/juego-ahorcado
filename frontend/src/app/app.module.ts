import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AhorcadoDisplayComponent } from './components/ahorcado-display/ahorcado-display.component';
import { AhorcadoKeyboardComponent } from './components/ahorcado-keyboard/ahorcado-keyboard.component';
import { AhorcadoLetrasComponent } from './components/ahorcado-letras/ahorcado-letras.component';
import { AppAhorcadoComponent } from './components/app-ahorcado/app-ahorcado.component';
import { AhorcadoDisplayWinComponent } from './components/ahorcado-display-win/ahorcado-display-win.component';

@NgModule({
  declarations: [
    AppComponent,
    AhorcadoDisplayComponent,
    AhorcadoKeyboardComponent,
    AhorcadoLetrasComponent,
    AppAhorcadoComponent,
    AhorcadoDisplayWinComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
