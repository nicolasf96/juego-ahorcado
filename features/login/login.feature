Feature: Login Juego ahorcado
  Como usuario quiero logear en el juego del ahorcado
  Para observar los resultados

  Scenario: Perder juego de ahorcado con la palabra angular
    Given abrir la página del login del ahorcado
    When ingreso mi usuario "Juan"
    When hago click en el boton comenzar
    Then observo el mensaje de bienvenida