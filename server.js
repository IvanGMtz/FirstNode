//1. Importar el modulo global http
// const http = require('http'); Por el metodo normal sin package.json
import http from 'http';

/*function requestListener(req, res){
    Es mejor pasar como funcion anonima.
}*/

// http.createServer(requestListener);

//Crear el servidor web, preferiblemente usar arrow fuction
const server = http.createServer((req,res)=>{
    const url = req.url;
    // console.log(req.url, req.method, req.headers); Informacion del servidor


    //routing

    if (url=== '/'){
        res.write('<html>');
        res.write('<head><title>My first response page</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text name="message"><button type="submit">sent</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    //enviando respuesta
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My first response page</title></head>');
    res.write('<body><h1>YOOOOO dudeee</h1></body>');
    res.write('</html>');
});

server.listen(4000);