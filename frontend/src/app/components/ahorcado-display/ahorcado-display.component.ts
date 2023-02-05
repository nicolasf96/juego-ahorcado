import { AhorcadoService } from 'src/app/services/ahorcado.service';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ahorcado-display',
  templateUrl: './ahorcado-display.component.html',
  styleUrls: ['./ahorcado-display.component.scss']
})
export class AhorcadoDisplayComponent implements OnInit, OnChanges {
  @Input() intentos: string[] = [];
  @Input() palabra: string = '';
  @Output() juegoFinalizado = new EventEmitter<boolean>();
  MAX_MISTAKES = 7;
  mistakesRemaining;
  success: boolean = false;
  constructor( private ahorcadoService:AhorcadoService){
    this.mistakesRemaining = this.MAX_MISTAKES;
  }
  ngOnChanges(changes: SimpleChanges): void {
    let gameId = localStorage.getItem('gameId');
    if(gameId!=null){
      this.ahorcadoService.estadoJuego(gameId).subscribe((data: any)=>{
      if(data.vidas==0 || data.isWin || data.isFinished){
        this.mistakesRemaining = this.MAX_MISTAKES;
        this.success = false;
      }
    })
    }
    
    
    const intentosActuales = changes?.['intentos']?.currentValue;
    if (
      intentosActuales &&
      intentosActuales.length &&
      intentosActuales !== changes['intentos'].previousValue
    ) {
      const char = [...intentosActuales].pop();
      this.checkLetra(char);
    }
  }
  vidas?:number;
  isFinished?:boolean;
  isWin?:boolean;
  oculta?: boolean;


  checkLetra(letra: string) {
    let didWin = true;
    this.mistakesRemaining -= this.actualizarVida(letra);
    for (let i = 0; i < this.palabra.length; i++) {
      if (
        !this.intentos.find(
          (intento) => intento.toLowerCase() === this.palabra[i].toLowerCase()
        )
      ) {
        didWin = false;
        break;
      }
    }
    this.success = didWin;
    if (this.success || this.mistakesRemaining === 0) {
      this.juegoFinalizado.emit(this.success);
    }
  }
  actualizarVida(letra:string){
    for (let i = 0; i < this.palabra.length; i++) {
      if (this.palabra[i].toLowerCase() === letra.toLowerCase()) {
        return 0;
      }
    }
    return 1;
  }

  ngOnInit(): void {
    let gameId = localStorage.getItem('gameId');
    if(gameId){
      this.ahorcadoService.estadoJuego(gameId).subscribe((data: any)=>{
        this.vidas=data.vidas;
        this.isFinished=data.isFinished;
        this.isWin=data.isWin;
        this.oculta=data.oculta;
      });
    }
  }
}
