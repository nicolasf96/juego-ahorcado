Feature: Perder Juego ahorcado
  Como usuario quiero perder el juego del ahorcado
  Para observar los resultados

  Scenario: Perder juego de ahorcado con la palabra angular
    Given abrir la página del ahorcado
    When ingreso letra "H"
    And ingreso letra "O"
    And ingreso letra "K"
    And ingreso letra "P"
    And ingreso letra "Z"
    And ingreso letra "X"
    And ingreso letra "I"
    Then observo los resultados relevantes al perder