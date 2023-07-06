import express from "express";
import dotenv from "dotenv";
dotenv.config();

const expressApp = express();

/**
 * *Configuración del middlewar
 * ? Habilitamos la entrada de datos de tipo json y text*
 * @var {express.json(), express.text()}
 */

expressApp.use(express.json());
expressApp.use(express.text());

expressApp.post('/campus/:nombre', (req, res) => {
    /**
     * ? Obtenemos los datos de entrada
     * @var {req.body}*Datos enviados al cliente
     * @var {req.query}*Datos enviados de la url
     * @var {req.params}*
     */

    let obj={
        DATA: req.body,
        'URL-GET': req.query,
        PARAMETROS: req.params
    }
    res.send(obj);
})


let config = {
    hostname: "127.233.06",
    port: 5510
}
expressApp.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}/campus`);
});