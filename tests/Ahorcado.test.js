import request from 'supertest'
import { exportAllDeclaration } from '@babel/types';
import LogicAhorcado from '../src/controllers/LogicAhorcado.js'


// SPRINT 1

describe('Validacion de letras y palabras', () => {


    test('VALIDA LETRA - Debe devolver true si la letra arriesgada esta contenida en la palabra secreta', async () => {
      const palabraSecreta= "palabra";
      const juego = new LogicAhorcado(palabraSecreta);
      let letra='p';
      expect(juego.ValidarLetra(letra)).toBe(true);
    })

    test('VALIDA LETRA INCORRECTA - Debe devolver false si la letra arriesgada no esta contenida en la palabra secreta', async () => {
      const palabraSecreta= "palabra";
      const juego = new LogicAhorcado(palabraSecreta);
      let letra='x';
      expect(juego.ValidarLetra(letra)).toBe(false);
    })

    test('VALIDA PALABRA INCORRECTA - Debe devolver false si la palabra arriesgada no es correcta' , async () => {
      const palabraSecreta= "palabra";
      const juego = new LogicAhorcado(palabraSecreta);
      let arriesgo = "palabrx"
      expect(juego.ValidarPalabra(arriesgo)).toBe(false);
    })


    test('VALIDA PALABRA CORRECTA - Debe devolver true si la palabra arriesgada es correcta' , async () => {
      const palabraSecreta= "correcta";
      const juego = new LogicAhorcado(palabraSecreta);
      let arriesgo = "correcta"
      expect(juego.ValidarPalabra(arriesgo)).toBe(true);
    })

    test('VALIDA VIDAS - Debe devolver true si todavia tenemos vidas' , async () => {
      const palabraSecreta= "secretword";
      const juego = new LogicAhorcado(palabraSecreta);
      expect(juego.ValidarVidas()).toBe(true);
    })

    test(' VALIDA SI PODEMOS SEGUIR JUGANDO - Debe devolver false cuando nos gastamos todas las vidas ' , async () => {
      const palabraSecreta= "secretword";
      const juego = new LogicAhorcado(palabraSecreta);
      let letras = ['x','y','z','q','ñ','v']
      letras.forEach(l => juego.ValidarLetra(l));
      expect(juego.ValidarVidas()).toBe(false);
    })

    test(' VALIDA LETRA CORRECTA EN POSICION RANDOM ' , async () => {
      const palabraSecreta= "secretword";
      const juego = new LogicAhorcado(palabraSecreta);
      let letra = 't'
      expect(juego.ValidarLetra(letra)).toBe(true);
    })

    test('MUESTRA RESULTADO PARCIAL' , async () => {
      const palabraSecreta= "secretword";
      const juego = new LogicAhorcado(palabraSecreta);
      expect(juego.MuestraResultado()).toBe('_ _ _ _ _ _ _ _ _ _ ');
    })


  })  

