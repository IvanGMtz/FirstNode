import express from "express";
import dotenv from "dotenv";
dotenv.config();
const expressApp = express();

/**
 * ? Importamos el modulo que contiene los endpoint
 */
import appCamper from "./routers/campus.js";

expressApp.use(express.json())
/**
 * *Redireccionamos la solicitud al router en el endpoint
 */

expressApp.use("/campus", appCamper);

let config = JSON.parse(process.env.MY_CONFIG);
expressApp.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}/campus`);
});