const express = require('express')

const app = express()






app.post('/products', (req, res) => {
    res.status(201).json()
  })


  app.post('/theword', (req, res) => {
    const { theword } = req.body

    res.status(201).json({
        theword
    })
  })





const port = 8080
if (require.main === module) {
    app.listen(() => console.log(`listening on port ${port}`))
  }
  
  module.exports.app = app