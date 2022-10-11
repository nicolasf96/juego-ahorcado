import app from '../src/app';
import request from 'supertest'
import { exportAllDeclaration } from '@babel/types';
import LogicAhorcado from '../src/controllers/LogicAhorcado.js'


// SPRINT 1

describe('Sprint 1', () => {
    test('Letra contenida', async () => {
      const palabraSecreta= "palabra";
      const juego = new LogicAhorcado(palabraSecreta);
      let letra='p';
      expect(juego.ValidarLetra(letra)).toBe(true);
    })
  })  
