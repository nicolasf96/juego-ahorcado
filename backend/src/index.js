import express, { json } from "express";
const app = express();

import router from './router/ahorcado.js'


app.use(express.json())

const port=process.env.PORT || 3000;

app.use("/", router)

app.listen(port,()=>{
    console.log("hola mundo")
});