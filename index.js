const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello world'));
app.get('/quienessomos', (req, res) => res.send("Quienes somos"));
app.get('/hola/:name', (req, res) => {
    var name = req.params.name;
    res.send(`Hola ${name}`)
});

app.get('/multiplica/:x/:y', (req, res) => {
    var y = req.params.y;
    var x = req.params.x;
    res.send(x*y + "")
});

app.get('/multiplica/:x/:y', (req, res) => {
    var y = req.params.y;
    var x = req.params.x;
    if(isNan(y) === true) {
        res.send(`Debes de introducir un numero`);
    } else if(isNaN(x) === true) {
        res.send(`Debes de introducir un numero`);
    } else {
        res.send(x*y + "");
    }
});

app.get('/junta/:name1/:name2', (req, res) => {
    var name1 = req.params.name1;
    var name2 = req.params.name2;
    res.send(`junta ${name1} con ${name2}`)
});

app.use('/404/', (req, res, next) => {
    
    res.status(404).send("Lo siento, me he equivocado, no volvera a ocurrir");
});

app.listen(3000, () => console.log('Servidor levantado en 3000'));
