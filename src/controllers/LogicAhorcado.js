import { thisExpression } from "@babel/types";

class LogicAhorcado {
    constructor(id) {
        this.id=id;
        this.palabraSecreta = 'ANGULAR';
        this.vidas = 7;
        this.letrasCorrectas='';
        this.letrasIncorrectas='';
        this.secreta = '',
        this.isFinished=false,
        this.isWon=false
    }

    verificarLetra(letra) {
        if (this.palabraSecreta.indexOf(letra) !== -1) {

            this.letrasCorrectas+=letra;
            if (this.ocultarPalabra()===this.palabraSecreta){
                this.isFinished = true;
                this.isWon = true;
            }
            return true;
        } else {
            this.letrasIncorrectas+=letra;
            this.vidas = this.vidas -1;
            if (this.letrasIncorrectas.length === 7) {
                this.isFinished = true;
            }
            return false;
        }

    }


    ocultarPalabra() {
        let palabraConGuiones = "";
        if(this.letrasCorrectas){
        for (let i = 0; i < this.palabraSecreta.length; i++) {
            let letraActual = this.palabraSecreta[i];
                
                if (this.letrasCorrectas.includes(letraActual)) {
                    palabraConGuiones += letraActual;
                } else {
                    palabraConGuiones += " _ ";
                }
                
            }
        }else{
            palabraConGuiones=  this.palabraSecreta.replace(/./g, " _ ");
        }
        return palabraConGuiones;
    }

    ValidarPalabra(palabraArriesgada){
        if(this.palabraSecreta == palabraArriesgada){
            return true;
        }else{
            return false;
        }
    }

    ValidarVidas(){
        if(this.vidas>=1){
            return true
        }else{
            return false
        }
    }

    verificarEstado(){
        return [this.vidas, this.isFinished, this.isWon];
    }
    reset() {
        this.letrasCorrectas = [];
        this.letrasIncorrectas = [];
        this.vidas=7;
        this.isFinished = false;
        this.isWon=false;
    }
    


}

export default LogicAhorcado;



