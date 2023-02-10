import express, { json } from "express";
import router from './router/ahorcado.js'
import path from 'path';
import cors from "cors";
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(cors());
app.use(express.json());

const isProduction= process.env.NODE_ENV === "production";
const distPatch = isProduction ? "../dist/prod" : "../dist/dev";



const port=process.env.PORT || 3000;

app.use("/", router);
app.use(express.static(path.join(__dirname, distPatch)));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, distPatch+'/index.html'));
});

app.listen(port,()=>{
    console.log("hola mundo")
});