Feature: Buscar palabra en Google
  Como usuario
  Quiero buscar una palabra en Google
  Para obtener resultados relevantes

  Scenario: Buscar palabra en Google
    Given abro la página de Google
    When busco la palabra "playwright"
    Then veo resultados relevantes para la búsqueda "playwright"