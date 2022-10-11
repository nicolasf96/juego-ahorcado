import app from '../src/app';
import request from 'supertest'
import { exportAllDeclaration } from '@babel/types';
import LogicAhorcado from '../src/controllers/LogicAhorcado.js'


// SPRINT 1

describe('Validacion de letras y palabras', () => {
    test('Debe devolver true si la letra arriesgada esta contenida en la palabra secreta', async () => {
      const palabraSecreta= "palabra";
      const juego = new LogicAhorcado(palabraSecreta);
      let letra='p';
      expect(juego.ValidarLetra(letra)).toBe(true);
    })

    test(' Debe devolver false si la palabra arriesgada no es correcta' , async () => {
      const palabraSecreta= "palabra";
      const juego = new LogicAhorcado(palabraSecreta);
      let arriesgo = "palabrx"
      expect(juego.ValidarPalabra(arriesgo)).toBe(false);
    })

  })  

