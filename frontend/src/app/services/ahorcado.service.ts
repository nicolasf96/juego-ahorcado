import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const defaultJSONPath = 'assets/languages.json';

@Injectable({
  providedIn: 'root'
})
export class AhorcadoService {


  constructor(private http: HttpClient) {}

  iniciarJuego(jsonPath: string = defaultJSONPath) {
    return this.http.get<{ category: string; items: string[] }>(jsonPath);
  }
  startJuego(){
    return this.http.get('http://localhost:3000/start');
  }

  adivinar(key: string, gameId:string){
    let data={
      letra: key
    }
    return this.http.post('http://localhost:3000/adivinar/'+gameId, data)
  }

  estadoJuego(gameId:string){
    return this.http.get('http://localhost:3000/check/'+gameId);
  }

}
