import express, { json } from "express";
import router from './router/ahorcado.js'
import path from 'path';
import cors from "cors";
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(cors());
app.use(express.json());

const port=process.env.PORT || 3000;

app.use("/", router);
app.use(express.static(path.join(__dirname, '../dist/juego-ahorcado')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/juego-ahorcado/index.html'));
});

app.listen(port,()=>{
    console.log("hola mundo")
});