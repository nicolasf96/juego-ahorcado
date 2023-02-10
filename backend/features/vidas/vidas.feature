Feature: Vidas Juego ahorcado
  Como usuario quiero perder 3 vidas en el juego
  Para observar los resultados

  Scenario: Perder juego de ahorcado con la palabra angular
    Given ingreso a la pagina del ahorcado
    When ingreso letra incorrecta "M"
    When ingreso letra incorrecta "K"
    When ingreso letra incorrecta "F"
    Then observo los resultados relevantes al perder 3 vidas