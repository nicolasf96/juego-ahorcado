Feature: Vidas Juego ahorcado
  Como usuario quiero perder 3 vidas en el juego
  Para observar los resultados

  Scenario: Perder juego de ahorcado con la palabra angular
    Given abrir la página del ahorcado
    When ingreso letra "M"
    And ingreso letra "K"
    And ingreso letra "F"
    Then observo los resultados relevantes al perder 3 vidas