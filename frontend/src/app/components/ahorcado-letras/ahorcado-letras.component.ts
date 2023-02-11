import { AhorcadoService } from 'src/app/services/ahorcado.service';
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ahorcado-letras',
  templateUrl: './ahorcado-letras.component.html',
  styleUrls: ['./ahorcado-letras.component.scss']
})
export class AhorcadoLetrasComponent {
  @Input() palabraOculta: string ='';
  constructor(private ahorcadoService:AhorcadoService){
    let gameId = localStorage.getItem('gameId');
    if(gameId!=null){
      this.ahorcadoService.estadoJuego(gameId).subscribe((data: any)=>{
      console.log(data.estadoPalabra);
      this.palabraOculta=data.estadoPalabra
    })
    }
    
  }
  ngOnChanges(changes: SimpleChanges){
    let gameId = localStorage.getItem('gameId');
    if(gameId!=null){
      this.ahorcadoService.estadoJuego(gameId).subscribe((data: any)=>{
      console.log(data.oculta);
      if(data.isFinished==false){
        this.palabraOculta=data.oculta
      }
      //this.palabraOculta=data.oculta
    })
    }
    
  }
}
