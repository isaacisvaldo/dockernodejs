import express  from "express";
import { config } from "dotenv";

const port= process.env.PORT;
const host =process.env.HOST;

const app = express();

app.get('/',(req,res)=>{ 

res.send("Testando Apenas A Rota Principal")
})
app.listen (port,host)