const express = require('express');
app = express();

//Middlewares -> Es una onstruccion o un collback que se va a ejecutar siemrpe no importa que URL es el que la persona pida
app.use( express.static(__dirname + '/public') )


app.get('/' , ( req , res ) => {
    // res.send('Hello world')

    let salida = {
        nombre : 'Alejo',
        age : '22',
        url : req.url
    }

    res.send(salida)

    
});

app.listen(3000 , () => {
    console.log('Escuchando en el puerto 3000');
})