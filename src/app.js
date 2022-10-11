import express from 'express'

const app = express()


app.get('/ping', (req,res)=>{
    res.send('pong')
})

app.get('/ahorcado', (req,res)=>{
    res.send([])
})

export default app;