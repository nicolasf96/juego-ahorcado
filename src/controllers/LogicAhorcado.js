class LogicAhorcado {
    constructor(palabraSecreta) {
        this.palabraSecreta = palabraSecreta;
        this.vida = 6;
        this.letrasCorrectas;
        this.letrasIncorrectas;
    }

    ValidarLetra(letra){
        if(this.palabraSecreta.indexOf(letra)==0){
            return true;
        }else{
            return false;
        }
    }

    ValidarPalabra(palabraArriesgada){
        if(this.palabraSecreta == palabraArriesgada){
            return true;
        }else{
            return false;
        }
    }


}

export default LogicAhorcado;



