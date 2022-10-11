class LogicAhorcado {
    constructor(palabraSecreta) {
        this.palabraSecreta = palabraSecreta;
        this.vidas = 6;
        this.letrasCorrectas;
        this.letrasIncorrectas;
    }

    ValidarLetra(letra){
        if(this.ValidarVida){
            if(this.palabraSecreta.indexOf(letra)==0){
                return true;
            }else{
                this.vidas = this.vidas -1;
                return false;
            }
            
        }
    }

    ValidarPalabra(palabraArriesgada){
        if(this.palabraSecreta == palabraArriesgada){
            return true;
        }else{
            return false;
        }
    }

    ValidarVida(){
        if(this.vidas>=1){
            return true
        }else{
            return false
        }
    }


}

export default LogicAhorcado;



