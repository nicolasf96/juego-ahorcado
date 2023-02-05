import { Component, EventEmitter, Input, Output } from '@angular/core';
import KEY_CHARS from 'src/app/constants/teclado';

interface IKey {
  value: string;
  guessed: boolean;
}

@Component({
  selector: 'app-ahorcado-keyboard',
  templateUrl: './ahorcado-keyboard.component.html',
  styleUrls: ['./ahorcado-keyboard.component.scss']
})
export class AhorcadoKeyboardComponent {
  keys: IKey[] = [];
  @Input() palabra = '';
  @Output() keyPressed = new EventEmitter<string>();
  constructor() {
    this.keys = KEY_CHARS.split('').map((key) => {
      return {
        value: key,
        guessed: false,
      };
    });
  }

  onKeyClick(key: IKey): void {
    if (key.guessed) {
      return;
    }
    key.guessed = true;
    this.keyPressed.emit(key.value);
  }
  keyA=false;
  keyB=false;
  keyC=false;
  keyD=false;
  keyE=false;
  keyF=false;
  keyG=false;
  keyH=false;
  keyI=false;
  keyJ=false;
  keyK=false;
  keyL=false;
  keyM=false;
  keyN=false;
  keyO=false;
  keyP=false;
  keyQ=false;
  keyR=false;
  keyS=false;
  keyT=false;
  keyU=false;
  keyV=false;
  keyW=false;
  keyX=false;
  keyY=false;
  keyZ=false;
  ingresoLetra(letra: string, key:boolean): void {
    if (key) {
      return;
    }
    this.desabilitar(letra);
    this.keyPressed.emit(letra);
  }

  desabilitar(letra:string){
    if(letra=='A'){
      this.keyA=true;
    }
    if(letra=='B'){
      this.keyB=true;
    }
    if(letra=='C'){
      this.keyC=true;
    }
    if(letra=='D'){
      this.keyD=true;
    }
    if(letra=='E'){
      this.keyE=true;
    }
    if(letra=='F'){
      this.keyF=true;
    }
    if(letra=='G'){
      this.keyG=true;
    }
    if(letra=='H'){
      this.keyH=true;
    }
    if(letra=='I'){
      this.keyI=true;
    }
    if(letra=='J'){
      this.keyJ=true;
    }
    if(letra=='K'){
      this.keyK=true;
    }
    if(letra=='L'){
      this.keyL=true;
    }
    if(letra=='M'){
      this.keyM=true;
    }
    if(letra=='N'){
      this.keyN=true;
    }
    if(letra=='O'){
      this.keyO=true;
    }
    if(letra=='P'){
      this.keyP=true;
    }
    if(letra=='Q'){
      this.keyQ=true;
    }
    if(letra=='R'){
      this.keyR=true;
    }
    if(letra=='S'){
      this.keyS=true;
    }
    if(letra=='T'){
      this.keyT=true;
    }
    if(letra=='U'){
      this.keyU=true;
    }
    if(letra=='V'){
      this.keyV=true;
    }
    if(letra=='W'){
      this.keyW=true;
    }
    if(letra=='X'){
      this.keyX=true;
    }
    if(letra=='Y'){
      this.keyY=true;
    }
    if(letra=='Z'){
      this.keyZ=true;
    }
    
  }
}
