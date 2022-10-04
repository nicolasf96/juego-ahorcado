const express = require('express')

const app = express()

const port = 8080


app.post('/products', (req, res) => {
    res.status(201).json()
  })

if (require.main === module) {
    app.listen(() => console.log(`listening on port ${port}`))
  }
  
  module.exports.app = app