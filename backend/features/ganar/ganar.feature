Feature: Ganar Juego ahorcado
  Como usuario quiero ganar el juego del ahorcado
  Para observar los resultados

  Scenario: Ganar juego de ahorcado con la palabra angular
    Given abro la página del ahorcado
    When ingreso la letra "M"
    And ingreso la letra "N"
    And ingreso la letra "R"
    And ingreso la letra "A"
    And ingreso la letra "U"
    And ingreso la letra "L"
    And ingreso la letra "G"
    Then observo los resultados relevantes al ganar

Feature: Perder Juego ahorcado
  Como usuario quiero perder el juego del ahorcado
  Para observar los resultados

  Scenario: Perder juego de ahorcado con la palabra angular
    Given abro la página del ahorcado
    When ingreso la letra "H"
    And ingreso la letra "O"
    And ingreso la letra "K"
    And ingreso la letra "P"
    And ingreso la letra "Z"
    And ingreso la letra "X"
    And ingreso la letra "O"
    Then observo los resultados relevantes al ganar