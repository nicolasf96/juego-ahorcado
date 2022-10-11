class LogicAhorcado {
    constructor(palabraSecreta) {
        this.palabraSecreta = palabraSecreta;
        this.vida = 6;
        this.letrasCorrectas;
        this.letrasIncorrectas;
        
    }

    ValidarLetra(letra){
        if(this.palabraSecreta.indexOf(this.palabra)==-1){
            return true;

        }
    }

}

export default LogicAhorcado;



