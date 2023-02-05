Feature: Buscar palabra en Google
  Como usuario
  Quiero buscar una palabra en Google
  Para obtener resultados relevantes

  Scenario: Buscar palabra en Google
    Given abro la página de Google
    When busco la palabra "Angular"
    Then veo resultados relevantes para la búsqueda "Angular"