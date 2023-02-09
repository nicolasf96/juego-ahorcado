import { AhorcadoService } from 'src/app/services/ahorcado.service';
import { Location } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-ahorcado',
  templateUrl: './app-ahorcado.component.html',
  styleUrls: ['./app-ahorcado.component.scss']
})
export class AppAhorcadoComponent {
  palabra: string='';
  intentos: string[] = [];
  palabraOculta:string='';
  restartGameBtnShown = false;
  resetDisplay=true;
  name:any;
  constructor(
    private ahorcadoService: AhorcadoService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.ahorcadoService.startJuego().subscribe((data: any)=>{
      this.palabra =data.palabra;
      this.palabraOculta=data.oculta;
      localStorage.setItem('gameId', data.id);
      this.name=localStorage.getItem('name')
    })
  }
  
  adivinar(letra: string){
    let gameId = localStorage.getItem('gameId');

    if (gameId != null){
      this.ahorcadoService.adivinar(letra, gameId).subscribe((data:any)=>{
      if (!letra || this.intentos.includes(letra)) {
        // if asegura que no se repitan letras
        return;
      }
      this.intentos= [...this.intentos, letra];
    }
    );
    this.ahorcadoService.estadoJuego(gameId).subscribe((data: any)=>{
      console.log(data.oculta);
      this.palabraOculta=data.oculta
    })
    }
  }

 

  reset() {
    this.intentos = [];
    this.ahorcadoService.startJuego().subscribe((data: any)=>{
      this.palabra =data.palabra;
      this.palabraOculta=data.oculta;
      localStorage.setItem('gameId', data.id);
    })
    this.restartGameBtnShown = false;
    this.resetDisplay=true;
  }

  juegoFinalizado() {
    this.restartGameBtnShown = true;
    let gameId = localStorage.getItem('gameId');
    if(gameId!=null){
      this.ahorcadoService.estadoJuego(gameId).subscribe((data: any)=>{
      if(data.isWin){
        this.resetDisplay=false;
      }else{
        this.resetDisplay=true;
      }
    })
    }
    
    //this.resetDisplay=false;

  }
}
