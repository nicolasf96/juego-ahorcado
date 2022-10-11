import { thisExpression } from "@babel/types";

class LogicAhorcado {
    constructor(palabraSecreta) {
        this.palabraSecreta = palabraSecreta;
        this.vidas = 6;
        this.letrasCorrectas;
        this.letrasIncorrectas;
        this.secreta = ''
    }

    ValidarLetra(letra){
        if(this.ValidarVidas){
            if(this.palabraSecreta.includes(letra)){
                return true;
            }else{
                this.vidas = this.vidas -1;
                return false;
            }
            
        }
    }

    MuestraResultado(){
        let len = this.palabraSecreta.length
        for (var i = 0; i < len; i++) {
            this.secreta = this.secreta + '_ ';
          }
        console.log(this.secreta)
        return this.secreta
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


}

export default LogicAhorcado;



