const request = require('supertest')
const { app } = require('../src/server')
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
