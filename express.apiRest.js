const express = require('express');//
const app = express();

app.get('/', (reg, res) => res.send('Hello world'));//cuando pones barra en el servidor te contesta hello world

app.listen(3000, () => console.log('Servidor levantado en 3000'));



// escribe un servidor que, cuando recibe un get, lo parchee y responda con su contenido
// books, el puerto pasara como segundo argumento y    como tercer argumento


const fs = require('fs');
const port = process.argv[2];
const filepath = process.aregv[3];
let espress = require('espress');
const app = express();

app.get('/books',(req, res)=> {
    fs.readFile(filepath, 'utf-8',(e, file)=> {
        if(e) {
            return res.sendStatus(500);
        }
        res.send(file);
    });
});

app.get('/books',(req, res)=> {
    fs.readFile(filepath, 'utf-8',(e, strinFile)=> {
        let obj = JSON.parse(strinFile);
       // let stringJson = JSON.stringify(obj)
       // res.send(stringJson)
        res.json(obj);
    });
});

app.listen(port, ()=> console.log(`Servidor levantado en ${port}`));

