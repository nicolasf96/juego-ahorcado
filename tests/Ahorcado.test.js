import request from 'supertest'
import { exportAllDeclaration } from '@babel/types';
import LogicAhorcado from '../src/controllers/LogicAhorcado.js'




describe('Validacion de letras y palabras', () => {


    test('VALIDA LETRA - Debe devolver true si la letra arriesgada esta contenida en la palabra secreta', async () => {
      const juego = new LogicAhorcado();
      let letra='A';
      expect(juego.verificarLetra(letra)).toBe(true);
    })

    test('VALIDA LETRA INCORRECTA - Debe devolver false si la letra arriesgada no esta contenida en la palabra secreta', async () => {
      const juego = new LogicAhorcado();
      let letra='x';
      expect(juego.verificarLetra(letra)).toBe(false);
    })

    test('VALIDA PALABRA INCORRECTA - Debe devolver false si la palabra arriesgada no es correcta' , async () => {
      const juego = new LogicAhorcado();
      let arriesgo = "palabrx"
      expect(juego.ValidarPalabra(arriesgo)).toBe(false);
    })


    test('VALIDA PALABRA CORRECTA - Debe devolver true si la palabra arriesgada es correcta' , async () => {
      const juego = new LogicAhorcado();
      let arriesgo = "ANGULAR"
      expect(juego.ValidarPalabra(arriesgo)).toBe(true);
    })

    test('VALIDA VIDAS - Debe devolver true si todavia tenemos vidas' , async () => {
      const juego = new LogicAhorcado();
      expect(juego.ValidarVidas()).toBe(true);
    })

    test(' VALIDA SI PODEMOS SEGUIR JUGANDO - Debe devolver false cuando nos gastamos todas las vidas ' , async () => {
      const juego = new LogicAhorcado();
      let letras = ['x','y','z','q','f','v', 'p']
      letras.forEach(l => juego.verificarLetra(l));
      expect(juego.ValidarVidas()).toBe(false);
    })

    test(' VALIDA LETRA CORRECTA EN POSICION RANDOM ' , async () => {
      const juego = new LogicAhorcado();
      let letra = 'L';
      expect(juego.verificarLetra(letra)).toBe(true);
    })

    test('MUESTRA RESULTADO PARCIAL INICIAL' , async () => {
      const juego = new LogicAhorcado();
      expect(juego.ocultarPalabra()).toBe(' _  _  _  _  _  _  _ ');
    })

    test('MUESTRA RESULTADO PARCIAL DESPUES DE UNA JUGADA' , async () => {
      const juego = new LogicAhorcado();
      let letra = 'L';
      juego.verificarLetra(letra);
      expect(juego.ocultarPalabra()).toBe(' _  _  _  _ L _  _ ');
    })

    test('VERIFICAR ESTADO ACTUAL DEL JUEGO' , async () => {
      const juego = new LogicAhorcado();
      expect(juego.verificarEstado()).toStrictEqual([ 7, false, false ]);
    })

    test('VERIFICAR REINICIO DEL JUEGO' , async () => {
      const juego = new LogicAhorcado();
      let letra = 'L';
      juego.verificarLetra(letra);
      juego.reset();
      expect(juego.verificarEstado()).toStrictEqual([ 7, false, false ]);
    })


  })  

