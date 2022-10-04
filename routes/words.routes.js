const Router = require('express')
const routerWords = Router();

routerWords.post('/products', (req, res) => {
    res.status(201).json()
  })
