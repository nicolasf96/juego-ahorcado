import express from "express";
import ahorcado from "../controllers/LogicAhorcado.js"

import Router from 'express';
const router = Router();


//Array que almacena las partidas
const partidas  = [];


router.get('/start', (req, res) => {
    // inicializar una nueva partida
    let id = partidas.length;
    partidas.push(new ahorcado(id));
    partidas[id].reset();
    let palabra = partidas[id].palabraSecreta; // esta función devuelve una palabra al azar
    let intentos = 7; // número de intentos permitidos
    let letrasUsadas = partidas[id].letrasCorrectas; // array para almacenar las letras usadas
    let estadoPalabra = partidas[id].ocultarPalabra(); // esta función devuelve un string con los caracteres ocultos
    res.send({palabra, intentos, letrasUsadas, estadoPalabra, id});
});

router.post("/adivinar/:id",async  (req, res)=>{
    const { id } = req.params;
    const letra=req.body.letra;
    let juego =partidas[id];
    //Verificar la letra en la palabra oculta
    const resultado = juego.verificarLetra(letra);
    let [vidas, isFinished, isWin] = juego.verificarEstado();
    //Enviar respuesta al cliente
     console.log(juego.ocultarPalabra());
    res.json({
        resultado: resultado,
        vidas: vidas,
        isFinished: isFinished,
        isWin: isWin,
        oculta: juego.ocultarPalabra()
    }); 
})

router.get("/check/:id", (req, res) => {
    const { id } = req.params;
    let juego =partidas[id];
    // Verificar el estado del juego
    let [vidas, isFinished, isWin] = juego.verificarEstado();
    // Enviar respuesta al cliente
    res.json({ 
        vidas: vidas,
        isFinished: isFinished,
        isWin: isWin,
        oculta: juego.ocultarPalabra() 
    });
});

router.get('/win/:id', (req, res) => {
    const { id } = req.params;
    let juego =partidas[id];
    // Verificar si la palabra adivinada es igual a la palabra original
    if (juego.isWin) {
        res.send("¡Felicidades! Has ganado el juego de ahorcado.");
    } else {
        res.send("Sigue intentando.");
    }
});

export default router;