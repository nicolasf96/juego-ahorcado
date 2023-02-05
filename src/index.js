import express, { json } from "express";
const app = express();

app.use(json());
app.listen(3000,()=>{
    console.log('Server running on PORT 3000')
});
