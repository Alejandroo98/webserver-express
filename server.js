const express = require('express');
const hbs = require('hbs')
app = express();
require('./hbs/helpers')

//Middlewares -> Es una onstruccion o un collback que se va a ejecutar siemrpe no importa que URL es el que la persona pida
app.use( express.static(__dirname + '/public') )
const port = process.env.PORT || 3000

/* Express HBS engine */
hbs.registerPartials( __dirname + '/views/parciales' )
app.set('view engine', 'hbs');


 app.get('/' , ( req , res ) => {
    res.render('home' , {
        name : "jeFfeRson alAvA"
    })
});

app.get('/about' , ( req , res ) => {
    res.render('about' , {
        year : new Date().getUTCFullYear()
    })
})


app.listen( port , () => {
    console.log(`Escuchando en el puerto ${ port }`);
})